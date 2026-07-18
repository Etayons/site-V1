'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { jobs } from '@/data/jobs';

const employerBenefits = [
  {
    title: 'Des projets européens, en vrai',
    text: "Vous travaillez en direct avec des bureaux d'études français, sur des ouvrages réels et aux normes européennes (Eurocode, NF C 15-100, DTU). Une expérience internationale, sans quitter Madagascar.",
  },
  {
    title: 'Une rémunération dans le haut du marché',
    text: "Salaires positionnés dans le haut du marché malgache de l'ingénierie, protection sociale complète et cadre de travail premium. Votre expertise reconnue à sa juste valeur.",
  },
  {
    title: 'Une montée en compétences réelle',
    text: 'Certifications logicielles (Revit, AutoCAD…), mentorat par des ingénieurs seniors, grille de carrière transparente et évaluations semestrielles. Vous progressez, concrètement.',
  },
  {
    title: 'Bureau équipé & flexibilité',
    text: "Vous travaillez depuis nos bureaux d'Antananarivo entièrement équipés (poste dimensionné, double écran, connexion dédiée), avec télétravail possible. En CDI, statut cadre.",
  },
];

const dailyTools = ['AutoCAD', 'Revit', 'Covadis', 'Caneco', 'Robot', 'Navisworks'];

export default function CareersContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(heroRef);
  useScrollReveal(benefitsRef);
  useScrollReveal(jobsRef, { stagger: 0.06 });

  return (
    <>
      <div ref={heroRef}>
        <section className="gridbg relative flex min-h-[475px] flex-col justify-start bg-marine pb-16 pt-32 text-white">
          <div className="wrap">
            <div className="eyb text-gold">Rejoindre Etayons</div>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              Construisez des structures d&apos;avenir,{' '}
              <span className="text-gold">développez votre potentiel.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-blue-gray">
              Intégrez un hub d&apos;élite technique à Antananarivo, en collaboration directe avec
              des donneurs d&apos;ordres européens de premier plan.
            </p>
          </div>
          <div className="hair absolute bottom-0 left-0 right-0" />
        </section>
      </div>

      <section className="py-24">
        <div ref={benefitsRef} className="wrap">
          <div className="eyb">Proposition employeur</div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-marine sm:text-[2.6rem]">
            Pourquoi rejoindre Etayons ?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Un cadre exigeant et international, une vraie reconnaissance de votre expertise, et
            l&apos;opportunité de travailler chaque jour avec des bureaux d&apos;études français de
            premier plan, depuis Antananarivo.
          </p>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {employerBenefits.map((benefit) => (
              <article key={benefit.title} data-reveal className="pil">
                <h3 className="text-xl font-semibold text-marine">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{benefit.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-line bg-white p-8">
            <div className="eyb">Vos outils au quotidien</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {dailyTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-sm border border-gold-dark px-3 py-1.5 text-sm text-marine"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact?mode=candidat" className="btns">
              Candidature spontanée
            </Link>
            <a href="#metiers" className="btnp-light">
              Voir les métiers
            </a>
          </div>
        </div>
      </section>

      <section id="metiers" className="bg-marine-deep py-24 text-white">
        <div ref={jobsRef} className="wrap">
          <div className="eyb text-gold">Nos métiers</div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-[2.6rem]">
            Des profils recherchés en continu.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/carriere/${job.slug}`}
                data-reveal
                className="group block rounded-lg border border-white/10 bg-marine p-8 no-underline transition-all duration-200 hover:-translate-y-1 hover:border-gold-dark hover:shadow-gold-soft"
              >
                <div className="text-xs uppercase tracking-[0.14em] text-gold">{job.level}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{job.title}</h3>
                <p className="mt-2 text-sm text-white/60">{job.tags.join(' · ')}</p>
                <div className="mt-6 text-sm font-medium text-gold">Voir la fiche de poste →</div>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact?mode=candidat" className="btns">
              Déposer ma candidature
            </Link>
            <Link href="/a-propos" className="btnp">
              Connaître Etayons
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-20 text-center">
        <div className="wrap">
          <blockquote className="m-0 font-heading text-2xl font-semibold leading-snug text-marine sm:text-4xl">
            « Construisez des structures d&apos;avenir,
            <br />
            <span className="text-gold-dark">développez votre potentiel. »</span>
          </blockquote>
          <div className="mt-10">
            <Link href="/contact?mode=candidat" className="btns">
              Candidature spontanée
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
