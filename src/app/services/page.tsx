import type { Metadata } from 'next';
import Link from 'next/link';
import { EyebrowBadge } from '@/components/eyebrow-badge';
import { services } from '@/data/services';
import { pageOpenGraph } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Nos prestations pour bureaux d’études',
  description:
    'Renforcez votre bureau d’études avec un Relais dédié : modélisation BIM Revit ou calcul de structures béton armé. Experts francophones, période test de 3 mois.',
  alternates: { canonical: 'https://etayons.fr/services' },
  openGraph: pageOpenGraph('/services'),
};

/** Mêmes étapes et mêmes délais que sur les pages de détail (contrat-cadre). */
const steps = [
  { title: 'Cadrage', text: 'Un échange de 30 minutes sur vos projets, vos logiciels et le niveau attendu.' },
  { title: 'Sélection', text: 'Nous présentons des profils testés sur votre métier, avec le résultat de leur test technique.' },
  { title: 'Entretien', text: 'Vous rencontrez le ou les candidats en visioconférence et choisissez.' },
  { title: 'Démarrage', text: 'Environ 3 semaines après la fiche de mission, poste équipé, sur vos horaires.' },
];

const cotéEtayons = [
  'L’employeur : contrat de travail et administratif du Relais.',
  'L’équipement du poste de travail.',
  'L’encadrement RH du Relais.',
  'Le remplacement sous 30 jours si le profil ne convient pas pendant la période test.',
];

const cotéClient = [
  'Les priorités et la direction technique.',
  'La relecture et la validation des livrables par vos ingénieurs.',
  'Les accès à vos outils et à vos logiciels métier.',
];

const conditions = [
  ['Période test', '3 mois. Si le profil ne convient pas, remplacement sous 30 jours.'],
  ['Engagement', '6 mois par Relais, renouvelable.'],
  ['Frais de gestion', '490 € HT par an et par Relais.'],
  ['Confidentialité', 'Engagement contractuel pendant la mission et 3 ans après. Les travaux vous appartiennent.'],
];

// Logiciels cités sur les pages de détail, sans doublon.
const logiciels = Array.from(new Set(services.flatMap((s) => s.logiciels)));

export default function ServicesPage() {
  return (
    <>
      <section className="gridbg relative flex min-h-[475px] flex-col justify-start bg-marine pb-16 pt-32 text-white">
        <div className="wrap">
          <EyebrowBadge>Prestations</EyebrowBadge>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Un expert technique dédié, <span className="text-gold">dans votre équipe</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-gray">
            Choisissez le métier dont votre bureau d’études a besoin. Votre Relais travaille dans{' '}
            <span className="text-gold">vos outils</span>, sur vos horaires, sous votre direction technique.
          </p>
        </div>
        <div className="hair absolute bottom-0 left-0 right-0" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="pil">
              <div className="eyb text-[0.62rem]">{s.prixDepuis}</div>
              <h2 className="mt-2 text-xl font-semibold text-marine">{s.menuLabel}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{s.intro}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-gold-onlight">Voir la prestation →</span>
            </Link>
          ))}
        </div>
        <div className="wrap mt-10">
          <p className="text-sm text-muted">
            Un autre métier, comme l’économie de la construction ou les VRD ?{' '}
            <Link href="/contact" className="text-gold-onlight underline">
              Parlons de votre besoin
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#f7f8fa] py-16 sm:py-20">
        <div className="wrap">
          <div className="eyb">Démarrage</div>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-marine sm:text-3xl">
            De votre besoin au premier jour travaillé
          </h2>
          <ol className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="min-w-0 rounded-lg border border-line bg-white p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-gold font-semibold text-marine">
                  {i + 1}
                </span>
                <div className="mt-4 font-semibold text-marine">{step.title}</div>
                <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <div className="eyb">Organisation</div>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold text-marine sm:text-3xl">Qui fait quoi</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Le Relais est salarié d’Etayons et travaille à distance depuis Madagascar. Vous gardez la main sur le
            technique, nous gérons tout le reste.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="min-w-0 rounded-lg border border-line bg-white p-7">
              <h3 className="text-lg font-semibold text-marine">Etayons s’occupe de</h3>
              <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm leading-6 text-muted">
                {cotéEtayons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 rounded-lg border border-line bg-white p-7">
              <h3 className="text-lg font-semibold text-marine">Vous gardez</h3>
              <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm leading-6 text-muted">
                {cotéClient.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <div className="eyb text-[0.62rem]">Logiciels maîtrisés</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {logiciels.map((l) => (
                <span key={l} className="rounded border border-line bg-white px-3 py-1.5 text-sm text-marine">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-marine py-16 text-white sm:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="min-w-0">
            <div className="eyb text-gold">Conditions</div>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Les règles du jeu, dès le départ</h2>
            <p className="mt-4 leading-7 text-blue-gray">
              Tout figure dans le contrat-cadre et l’accord d’application de chaque Relais. Le prix dépend du métier,
              du diplôme et de l’expérience du profil.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btns">
                Discutons de votre projet
              </Link>
            </div>
          </div>
          <dl className="m-0 grid min-w-0 gap-4 text-sm">
            {conditions.map(([dt, dd]) => (
              <div key={dt} className="border-b border-white/10 pb-4">
                <dt className="eyb text-[0.62rem] text-gold">{dt}</dt>
                <dd className="m-0 mt-1 text-white/85">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
