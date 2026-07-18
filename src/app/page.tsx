import type { Metadata } from 'next';
import Link from 'next/link';
import CaseStudies from '@/components/case-studies';
import ComparisonTable from '@/components/comparison-table';
import Hero from '@/components/hero';

// L'accueil hérite du titre et de la description par défaut du layout,
// mais doit déclarer sa propre URL canonique.
export const metadata: Metadata = {
  alternates: { canonical: 'https://etayons.fr/' },
};

const pillars = [
  {
    number: '01',
    title: 'Talents',
    text: "Ingénieurs, projeteurs et techniciens francophones formés aux standards européens et sélectionnés sur dossier technique.",
  },
  {
    number: '02',
    title: 'Expertise',
    text: "Maîtrise CAO/DAO, calculs de structures, BIM, gestion de données techniques et méthodes des grands donneurs d'ordres.",
  },
  {
    number: '03',
    title: 'Performance',
    text: 'Continuité de production, flexibilité contractuelle et réactivité absolue grâce à un fuseau horaire aligné.',
  },
];

const stats = [
  { value: '100%', label: 'Francophone' },
  { value: '+1h / +2h', label: 'Parfaitement synchrone été comme hiver' },
  { value: 'CAO', label: 'BIM · Calcul · DAO' },
  { value: 'B2B', label: 'Contrats flexibles' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Piliers */}
      <section className="py-24">
        <div className="wrap">
          <div className="eyb">Notre écosystème</div>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-marine sm:text-[2.8rem]">
            Trois piliers, une seule exigence.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            Un modèle bâti sur des compétences francophones formées aux standards européens et une
            collaboration synchrone avec vos bureaux d&apos;études.
          </p>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.number} className="pil">
                <div
                  className="font-heading text-6xl font-bold"
                  style={{ color: 'color-mix(in oklab, oklch(0.78 0.14 78) 60%, white)' }}
                >
                  {pillar.number}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-marine">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{pillar.text}</p>
                <div className="mt-8 h-px w-12 bg-gold-dark" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-marine-deep py-24 text-white">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="border-l pl-6"
              style={{ borderColor: 'color-mix(in oklab, oklch(0.65 0.13 70) 40%, transparent)' }}
            >
              <div className="font-heading text-5xl font-bold text-gold">{stat.value}</div>
              <div className="mt-3 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modèle + Carrière */}
      <section className="py-24">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Link href="/a-propos" className="pil p-12">
            <div className="eyb">Notre modèle</div>
            <h2 className="mt-6 text-2xl font-semibold text-marine">
              Une extension naturelle de votre bureau d&apos;études.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Un partenariat bâti sur la transparence, l&apos;éthique et un cadre contractuel B2B
              flexible.
            </p>
            <div className="mt-8 font-medium text-gold-dark">Découvrir notre méthodologie →</div>
          </Link>
          <Link href="/carriere" className="pil relative overflow-hidden bg-marine p-12 text-white">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, oklch(0.78 0.14 78), transparent 70%)' }}
            />
            <div className="eyb text-gold">Carrière</div>
            <h2 className="mt-6 text-2xl font-semibold">
              Rejoignez l&apos;excellence de l&apos;ingénierie francophone.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Ingénieur, projeteur, tech lead ? Propulsez votre carrière au sein d&apos;une structure
              exigeante et internationale.
            </p>
            <div className="mt-8 font-medium text-gold">Voir les opportunités →</div>
          </Link>
        </div>
      </section>

      {/* Comparatif */}
      <section className="border-t border-line bg-[#f7f8fa] py-24">
        <div className="wrap">
          <div className="eyb">Comparatif</div>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-marine sm:text-[2.6rem]">
            Trois façons de renforcer votre bureau d&apos;études.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            Face au salariat classique et au freelancing local (TJM élevé, aucune garantie de
            remplacement en cas d&apos;absence), un Relais dédié à Madagascar combine réactivité,
            continuité et coût maîtrisé.
          </p>
          <ComparisonTable />
        </div>
      </section>

      {/* Cas clients */}
      <section id="usecases" className="bg-marine py-24 text-white">
        <div className="wrap">
          <div className="eyb text-gold">Cas clients</div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-[2.8rem]">
            Un Relais, un métier,
            <br />
            des résultats mesurables.
          </h2>
          <CaseStudies />
        </div>
      </section>

      {/* Citation + CTA */}
      <section className="border-t border-line bg-white py-20 text-center">
        <div className="wrap">
          <blockquote className="m-0 font-heading text-2xl font-semibold leading-snug text-marine sm:text-4xl">
            « Vos compétences techniques,
            <br />
            <span className="text-gold-dark">notre relais à Madagascar.</span> »
          </blockquote>
          <div className="mt-10">
            <Link href="/contact" className="btns">
              Prendre contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
