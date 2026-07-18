'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type Mode = 'entreprise' | 'candidat';
type Status = 'idle' | 'sending' | 'sent' | 'error';

const labels: Record<Mode, { name: string; second: string; fourth: string; message: string }> = {
  entreprise: {
    name: 'Nom & prénom',
    second: 'Société',
    fourth: 'Téléphone',
    message: 'Brief du projet / compétences recherchées',
  },
  candidat: {
    name: 'Nom',
    second: 'Prénom',
    fourth: 'Spécialité',
    message: 'Message & lien portfolio',
  },
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialMode: Mode = searchParams.get('mode') === 'candidat' ? 'candidat' : 'entreprise';
  const [mode, setMode] = useState<Mode>(initialMode);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fields, setFields] = useState({
    name: '',
    secondField: '',
    email: '',
    phoneOrSpecialty: '',
    cvLink: '',
    message: '',
  });

  const label = labels[mode];

  function updateField(key: keyof typeof fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fields.name.trim() || !fields.email.trim()) {
      setErrorMessage('Merci de renseigner au moins votre nom et votre email.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode, ...fields, message: fields.message || 'Non renseigné' }),
      });
      const json: { success?: boolean; error?: string } = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "L'envoi a échoué.");
      }
      setStatus('sent');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "L'envoi a échoué. Écrivez-nous à contact@etayons.fr."
      );
    }
  }

  if (status === 'sent') {
    return (
      <div className="w-full rounded-xl border border-line bg-white p-12 text-center">
        <h2 className="text-2xl font-semibold text-marine">Message reçu.</h2>
        <p className="mt-4 text-muted">Nous revenons vers vous sous 24h ouvrées.</p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-lg border-2 border-line bg-white px-4 py-3 text-sm text-marine-deep transition-colors focus:border-gold-dark focus:outline-none';

  const modeOptions = [
    ['entreprise', "Bureau d'études / Entreprise", 'Besoin de renfort technique'],
    ['candidat', "Talent de l'ingénierie", 'Candidature / Portfolio'],
  ] as const;
  const activeSubtitle = modeOptions.find(([value]) => value === mode)?.[2];

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="eyb">Vous êtes</div>
      <div className="mt-4 inline-flex rounded-full bg-[#f1f1ee] p-1">
        {modeOptions.map(([value, title]) => (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            aria-pressed={mode === value}
            className={`inline-flex min-h-[44px] cursor-pointer items-center rounded-full px-5 text-sm font-medium transition-all ${
              mode === value ? 'bg-marine text-white shadow-gold-soft' : 'text-muted hover:text-marine'
            }`}
          >
            {title}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">{activeSubtitle}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="mb-2 block text-sm font-medium text-marine">
            {label.name} *
          </label>
          <input
            id="f-name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="f-second" className="mb-2 block text-sm font-medium text-marine">
            {label.second}
          </label>
          <input
            id="f-second"
            type="text"
            value={fields.secondField}
            onChange={(e) => updateField('secondField', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="f-email" className="mb-2 block text-sm font-medium text-marine">
            Email professionnel *
          </label>
          <input
            id="f-email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="f-fourth" className="mb-2 block text-sm font-medium text-marine">
            {label.fourth}
          </label>
          <input
            id="f-fourth"
            type={mode === 'entreprise' ? 'tel' : 'text'}
            autoComplete={mode === 'entreprise' ? 'tel' : 'off'}
            value={fields.phoneOrSpecialty}
            onChange={(e) => updateField('phoneOrSpecialty', e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="f-message" className="mb-2 block text-sm font-medium text-marine">
          {label.message}
        </label>
        <textarea
          id="f-message"
          rows={5}
          value={fields.message}
          onChange={(e) => updateField('message', e.target.value)}
          className={inputClass}
        />
      </div>

      {mode === 'candidat' && (
        <div className="mt-5">
          <label htmlFor="f-cv" className="mb-2 block text-sm font-medium text-marine">
            Lien vers votre CV / portfolio
          </label>
          <input
            id="f-cv"
            type="url"
            value={fields.cvLink}
            onChange={(e) => updateField('cvLink', e.target.value)}
            className={inputClass}
          />
          <p className="mt-2 text-xs text-muted">
            Ou envoyez votre CV en pièce jointe à contact@etayons.fr
          </p>
        </div>
      )}

      {status === 'error' && errorMessage && (
        <p role="alert" className="mt-5 border-l-[3px] border-red-600 bg-red-50 p-4 text-sm text-red-800">
          {errorMessage}
        </p>
      )}

      <div className="mt-8">
        <button type="submit" disabled={status === 'sending'} className="btns disabled:opacity-60">
          {status === 'sending' ? 'Envoi…' : 'Envoyer ma demande'}
        </button>
      </div>
      <p className="mt-5 text-xs leading-6 text-muted">
        Réponse sous 24h ouvrées.
        <br />
        Vos données restent confidentielles et ne sont jamais transmises à des tiers.
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  );
}
