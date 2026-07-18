import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';

// Clé Web3Forms (publique par conception, surchargeable par variable d'environnement)
const WEB3FORMS_ACCESS_KEY =
  process.env['WEB3FORMS_ACCESS_KEY'] ?? '550ff9b7-a5c8-40e1-961b-9e4f73eab288';

const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

// Rate limit best-effort par instance. Suffisant pour un site vitrine ;
// passer à Vercel KV si le trafic ou l'abus le justifie.
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) return true;
  requestLog.set(ip, [...timestamps, now]);
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Trop de demandes. Merci de réessayer dans quelques minutes.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Requête invalide.' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? 'Données invalides.';
    return NextResponse.json({ success: false, error: firstError }, { status: 400 });
  }

  const data = parsed.data;
  const isCompany = data.mode === 'entreprise';
  const subject = isCompany
    ? `[Site Etayons] Demande de Relais : ${data.secondField || data.name}`
    : `[Site Etayons] Candidature : ${data.name} ${data.secondField}`;

  const lines = [
    `${isCompany ? 'Nom & prénom' : 'Nom'} : ${data.name}`,
    `${isCompany ? 'Société' : 'Prénom'} : ${data.secondField}`,
    `Email : ${data.email}`,
    `${isCompany ? 'Téléphone' : 'Spécialité'} : ${data.phoneOrSpecialty}`,
    ...(isCompany ? [] : [`Lien CV / portfolio : ${data.cvLink}`]),
    '',
    `Message :`,
    data.message,
  ];

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject,
        from_name: 'Site Etayons',
        email: data.email,
        replyto: data.email,
        message: lines.join('\n'),
      }),
    });
    const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;
    if (!response.ok || !result?.success) throw new Error(result?.message ?? 'échec');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "L'envoi a échoué. Vous pouvez nous écrire directement à contact@etayons.fr." },
      { status: 502 }
    );
  }
}
