import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EyebrowBadge } from '@/components/eyebrow-badge';
import { getService, services } from '@/data/services';
import { getPostBySlug } from '@/lib/blog';
import { pageOpenGraph } from '@/lib/metadata';

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://etayons.fr/services/${service.slug}` },
    openGraph: pageOpenGraph(`/services/${service.slug}`),
  };
}

const steps = [
  { title: 'Cadrage', text: 'Un échange de 30 minutes sur vos projets, vos logiciels et le niveau attendu.' },
  { title: 'Sélection', text: 'Nous présentons des profils testés sur votre métier, avec le résultat de leur test technique.' },
  { title: 'Entretien', text: 'Vous rencontrez le ou les candidats en visioconférence et choisissez.' },
  { title: 'Démarrage', text: 'Environ 3 semaines après la fiche de mission, poste équipé, sur vos horaires.' },
];

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedPosts = service.articles
    .map((s) => getPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== null);
  const contactHref = `/contact?service=${encodeURIComponent(service.slug)}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.metaTitle,
    description: service.metaDescription,
    provider: { '@type': 'Organization', name: 'Etayons', url: 'https://etayons.fr' },
    areaServed: { '@type': 'Country', name: 'France' },
    url: `https://etayons.fr/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="gridbg relative bg-marine pb-16 pt-28 text-white sm:pt-32">
        <div className="wrap">
          <EyebrowBadge>Prestation · Relais dédié</EyebrowBadge>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-gray">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={contactHref} className="btns">
              Chiffrer mon besoin
            </Link>
            <Link href="#conditions" className="btnp">
              Voir les conditions
            </Link>
          </div>
        </div>
        <div className="hair absolute bottom-0 left-0 right-0" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="min-w-0">
            <div className="eyb">Quand faire appel à un Relais</div>
            <h2 className="mt-3 text-2xl font-semibold text-marine sm:text-3xl">Vous vous reconnaissez ?</h2>
          </div>
          <ul className="m-0 grid min-w-0 list-none gap-3 p-0">
            {service.besoins.map((b) => (
              <li key={b} className="border-l-[3px] border-gold bg-white px-5 py-4 text-marine">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-16 sm:py-20">
        <div className="wrap">
          <div className="eyb">Ce que produit votre Relais</div>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-marine sm:text-3xl">Périmètre et livrables</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.livrables.map((group) => (
              <div key={group.title} className="min-w-0 rounded-lg border border-line bg-white p-7">
                <h3 className="text-lg font-semibold text-marine">{group.title}</h3>
                <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm leading-6 text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <div className="eyb text-[0.62rem]">Logiciels maîtrisés</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.logiciels.map((l) => (
                <span key={l} className="rounded border border-line bg-white px-3 py-1.5 text-sm text-marine">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <div className="eyb">Organisation</div>
            <h2 className="mt-3 text-2xl font-semibold text-marine sm:text-3xl">Qui fait quoi</h2>
            <p className="mt-4 leading-7 text-muted">
              Le Relais est salarié d’Etayons et travaille à distance depuis Madagascar, sur vos horaires.
              Vous fixez les priorités et gardez la direction technique : vos ingénieurs relisent et valident
              les livrables. Nous assurons l’employeur, l’équipement, l’encadrement RH et le remplacement.
            </p>
            <div className="mt-6">
              <div className="eyb text-[0.62rem]">Ce dont votre Relais a besoin pour démarrer</div>
              <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm leading-6 text-muted">
                {service.entrees.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
          <ol className="m-0 grid min-w-0 list-none gap-4 p-0">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-lg border border-line bg-white p-5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-gold font-semibold text-marine">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold text-marine">{step.title}</div>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="conditions" className="scroll-mt-28 bg-marine py-16 text-white sm:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0">
            <div className="eyb text-gold">Conditions</div>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{service.prixDepuis}</h2>
            <p className="mt-4 leading-7 text-blue-gray">{service.prixDetail}</p>
          </div>
          <dl className="m-0 grid min-w-0 gap-4 text-sm">
            {[
              ['Période test', '3 mois. Si le profil ne convient pas, remplacement sous 30 jours.'],
              ['Engagement', '6 mois par Relais, renouvelable.'],
              ['Facturation', 'Trimestrielle, à échoir. Remise de 5 % dès 4 Relais, 10 % au-delà de 6.'],
              ['Confidentialité', 'Engagement contractuel pendant la mission et 3 ans après. Les travaux vous appartiennent.'],
            ].map(([dt, dd]) => (
              <div key={dt} className="border-b border-white/10 pb-4">
                <dt className="eyb text-[0.62rem] text-gold">{dt}</dt>
                <dd className="m-0 mt-1 text-white/85">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="wrap mt-10">
          <Link href={contactHref} className="btns">
            Chiffrer mon besoin
          </Link>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="wrap">
            <div className="eyb">Pour aller plus loin</div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="pil">
                  <div className="eyb text-[0.62rem]">{post.category}</div>
                  <div className="mt-2 text-lg font-semibold text-marine">{post.title}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{post.excerpt}</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">
              Vous êtes {service.slug === 'bim-revit' ? 'modeleur BIM' : 'ingénieur structure'} et souhaitez nous
              rejoindre ?{' '}
              <Link href={`/carriere/${service.jobSlug}`} className="text-gold-onlight underline">
                Voir la fiche de poste
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
