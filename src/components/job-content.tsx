'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { EyebrowBadge } from '@/components/eyebrow-badge';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { jobs, type Job } from '@/data/jobs';

interface JobContentProps {
  job: Job;
}

function SectionNumber({ n }: { n: number }) {
  return (
    <span className="mr-2.5 inline-flex h-7 w-7 items-center justify-center rounded-sm bg-gold text-sm font-semibold text-marine">
      {n}
    </span>
  );
}

const infoFields = (job: Job) => [
  { label: 'Intitulé du poste', value: job.title },
  { label: 'Référence', value: job.reference },
  { label: 'Statut', value: job.statut },
  { label: 'Localisation', value: job.localisation },
  { label: 'Expérience', value: job.experience },
  { label: 'Rattachement', value: job.rattachement },
];

export default function JobContent({ job }: JobContentProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLDivElement>(null);
  useScrollReveal(heroRef);
  useScrollReveal(bodyRef);
  useScrollReveal(relatedRef, { stagger: 0.06 });

  return (
    <>
      <div ref={heroRef}>
        <section className="gridbg relative flex min-h-[475px] flex-col justify-start bg-marine pb-16 pt-32 text-white">
          <div className="wrap">
            <Link href="/carriere" className="text-sm text-gold no-underline">
              ← Retour aux métiers
            </Link>
            <div className="mt-6">
              <EyebrowBadge>Nous recrutons · Fiche de poste</EyebrowBadge>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              {job.title} (F/H)
            </h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="tag-gold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hair absolute bottom-0 left-0 right-0" />
        </section>
      </div>

      <section className="py-20">
        <div ref={bodyRef} className="wrap max-w-3xl">
          <div
            data-reveal
            className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2"
          >
            {infoFields(job).map((field) => (
              <div key={field.label} className="bg-white p-5">
                <div className="eyb text-[0.62rem]">{field.label}</div>
                <div className="mt-1.5 text-sm font-medium text-marine">{field.value}</div>
              </div>
            ))}
          </div>

          <div data-reveal>
            <h2 className="mt-12 flex items-center text-2xl font-semibold text-marine">
              <SectionNumber n={1} />
              Contexte et finalité du poste
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">{job.contexte}</p>
          </div>

          <div data-reveal>
            <h2 className="mt-10 flex items-center text-2xl font-semibold text-marine">
              <SectionNumber n={2} />
              Vos missions
            </h2>
            {job.missions.map((group) => (
              <div key={group.title} className="mt-6">
                <div className="eyb">{group.title}</div>
                <ul className="mt-2 space-y-1.5 text-base leading-7 text-muted">
                  {group.items.map((item) => (
                    <li key={item} className="pl-4 -indent-4">
                      <span className="mr-2 text-gold-dark">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div data-reveal>
            <h2 className="mt-10 flex items-center text-2xl font-semibold text-marine">
              <SectionNumber n={3} />
              Profil recherché
            </h2>
            <div className="mt-6">
              <div className="eyb">Formation et expérience</div>
              <p className="mt-2 text-base leading-8 text-muted">{job.profil.formation}</p>
            </div>
            <div className="mt-6">
              <div className="eyb">Compétences techniques</div>
              <ul className="mt-2 space-y-1.5 text-base leading-7 text-muted">
                {job.profil.competencesTechniques.map((item) => (
                  <li key={item} className="pl-4 -indent-4">
                    <span className="mr-2 text-gold-dark">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <div className="eyb">Qualités personnelles</div>
              <ul className="mt-2 space-y-1.5 text-base leading-7 text-muted">
                {job.profil.qualitesPersonnelles.map((item) => (
                  <li key={item} className="pl-4 -indent-4">
                    <span className="mr-2 text-gold-dark">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-reveal>
            <h2 className="mt-10 flex items-center text-2xl font-semibold text-marine">
              <SectionNumber n={4} />
              Conditions
            </h2>
            <ul className="mt-4 space-y-1.5 text-base leading-7 text-muted">
              {job.conditions.map((item) => (
                <li key={item} className="pl-4 -indent-4">
                  <span className="mr-2 text-gold-dark">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact?mode=candidat" className="btns">
              Postuler à ce poste
            </Link>
            <Link href="/carriere" className="btnp-light">
              Voir les autres métiers
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-[#f7f8fa] py-16">
        <div ref={relatedRef} className="wrap">
          <div className="eyb">Autres métiers</div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {jobs
              .filter((j) => j.slug !== job.slug)
              .map((other) => (
                <Link key={other.slug} href={`/carriere/${other.slug}`} data-reveal className="pil">
                  <div className="text-xs uppercase tracking-[0.14em] text-gold-dark">
                    {other.level}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-marine">{other.title}</h3>
                  <div className="mt-4 text-sm font-medium text-gold-dark">Voir la fiche →</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
