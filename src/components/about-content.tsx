'use client';

import { useRef } from 'react';
import Link from 'next/link';
import FaqAccordion from '@/components/faq-accordion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const keyFigures = [
  {
    value: '3 semaines',
    label: 'Pour démarrer',
    detail: 'De la fiche de mission au premier jour travaillé.',
  },
  {
    value: '+1h / +2h',
    label: 'Fuseau optimal',
    detail: 'Collaboration synchrone été comme hiver.',
  },
  {
    value: '3 mois',
    label: "Période d'essai",
    detail: "Profil remplacé sous 30 jours, sans frais, s'il ne convient pas.",
  },
  {
    value: '100%',
    label: 'Francophone et dédié',
    detail: 'Vos outils, vos méthodes : AutoCAD, Revit, Covadis, Caneco.',
  },
];

const destinations = [
  {
    criterion: 'Coût horaire moyen de production',
    madagascar: '6 € à 12 €',
    maghreb: '15 € à 25 €',
    europeEst: '25 € à 40 €',
  },
  {
    criterion: 'Niveau de français',
    madagascar: 'Excellent, souvent natif',
    maghreb: 'Très bon',
    europeEst: 'Variable, souvent orienté anglais',
  },
  {
    criterion: 'Écart horaire avec Paris (été / hiver)',
    madagascar: '+1h / +2h',
    maghreb: '0h / +1h',
    europeEst: '0h / +1h',
  },
];

const governanceItems = [
  {
    title: 'Sécurité juridique totale',
    text: "Etayons est l'unique employeur du Relais : contrat cadre clair, conformité sociale et fiscale malgache justifiable sur demande, responsabilité civile professionnelle assurée. Vous bénéficiez des compétences sans porter le risque employeur.",
  },
  {
    title: 'Confidentialité industrielle',
    text: "NDA signé avant toute mission, droits d'accès limités au strict nécessaire, projets cloisonnés et assurance cyber-risques incluse. Vos données techniques restent les vôtres.",
  },
  {
    title: 'Vous restez libres',
    text: "Période d'essai de 3 mois, remplacement sous 30 jours sans frais, aucun engagement sur les profils présentés. La relation dure parce qu'elle performe, pas parce qu'un contrat vous enferme.",
  },
  {
    title: 'Rémunération juste, impact réel',
    text: "Salaires positionnés dans le haut du marché malgache de l'ingénierie, protection sociale complète et cadre de travail premium. Choisir Etayons, c'est créer de l'emploi qualifié durable à Madagascar, pas acheter du low-cost.",
  },
  {
    title: 'Développement des talents',
    text: "Formation continue, certifications logicielles, mentorat par des seniors et parcours de carrière structuré. Un Relais qui progresse, c'est une compétence qui grandit au service de votre équipe.",
  },
  {
    title: 'Éthique du recrutement',
    text: "Nous ne débauchons jamais au sein de vos équipes internes : nous les renforçons. Et les points qualité trimestriels inscrits au contrat entretiennent l'amélioration continue du service.",
  },
];

const steps = [
  {
    number: '01',
    title: 'Cadrer votre besoin',
    text: "Tout démarre par un Accord d'application : compétences recherchées, profil, outils, volume et conditions y sont définis noir sur blanc. Nous présélectionnons les candidats sur dossier technique, vous validez votre futur Relais en entretien. Comptez environ 3 semaines entre la fiche de mission et le premier jour travaillé.",
  },
  {
    number: '02',
    title: 'Intégrer votre Relais en toute sécurité',
    text: "Le Relais, c'est le salarié Etayons mis à disposition de votre équipe. Vous le formez à vos méthodes et nommez un interlocuteur privilégié ; nous fournissons son poste de travail complet (ordinateur, double écran, connexion dédiée). Une période d'essai de 3 mois vous protège : en cas d'insatisfaction, remplacement sous 30 jours, sans frais supplémentaires.",
  },
  {
    number: '03',
    title: 'Piloter en toute transparence',
    text: "Vous gardez la maîtrise technique (plan de charge, directives, contrôle qualité), exactement comme avec vos propres équipes. Nous assurons l'emploi, l'administratif et l'assiduité, et nous vous informons à l'avance de toute absence, congé ou jour férié pour garantir la continuité de votre production.",
  },
  {
    number: '04',
    title: 'Mesurer et améliorer en continu',
    text: "Une réunion de cadrage trimestrielle est inscrite au contrat : revue de la qualité produite, ajustement du dispositif, montée en compétences, évolution du nombre de Relais (avec remises dès 4 Relais). Chaque cycle nourrit le suivant. C'est notre amélioration continue du service.",
  },
];

export default function AboutContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const governanceRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  useScrollReveal(heroRef);
  useScrollReveal(visionRef);
  useScrollReveal(tableRef);
  useScrollReveal(stepsRef);
  useScrollReveal(governanceRef);
  useScrollReveal(faqRef, { stagger: 0.06 });
  useScrollReveal(ctaRef);

  return (
    <>
      {/* 1. Hero — BLUE MARINE (fusionne avec le Header) */}
      <div ref={heroRef}>
        <section className="gridbg relative flex min-h-[475px] flex-col justify-start bg-marine pb-16 pt-32 text-white">
          <div className="wrap">
            <div className="eyb text-gold">Notre mission</div>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              L&apos;extension naturelle de{' '}
              <span className="text-gold">votre bureau d&apos;études.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-blue-gray">
              Nous bâtissons des passerelles techniques durables entre la France et Madagascar, sur
              un socle d&apos;éthique et de rigueur.
            </p>
          </div>
          <div className="hair absolute bottom-0 left-0 right-0" />
        </section>
      </div>

      {/* 2. Notre vision + stats — WHITE */}
      <section className="bg-white py-24">
        <div ref={visionRef} className="wrap">
          <div className="eyb">Notre vision</div>
          <h2 className="mt-4 text-3xl font-semibold text-marine sm:text-[2.6rem]">
            Bâtisseurs de passerelles.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
            Recruter un chargé d&apos;études prend des mois. Votre plan de charge, lui,
            n&apos;attend pas. Nous ne faisons <strong>pas d&apos;externalisation de masse</strong> :
            Madagascar n&apos;est pas un argument de coût, c&apos;est un hub de compétences
            francophones formées aux méthodologies européennes.
          </p>
          <blockquote className="mt-8 border-l-[3px] border-gold pl-6 font-heading text-xl font-semibold text-marine">
            « Nous étayons vos équipes techniques. »
          </blockquote>

          <div className="mt-16 border-t border-line pt-16">
            <div className="eyb">Ce que vous y gagnez</div>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
              Un Relais dédié à temps plein, qui travaille dans vos outils, à vos méthodes et sur vos
              horaires. Vous augmentez votre capacité de production sans embauche, sans risque
              employeur et à coût maîtrisé. Vous pilotez la technique, nous gérons tout le reste.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {keyFigures.map((figure) => (
                <div
                  key={figure.value}
                  data-reveal
                  className="rounded-lg border border-line bg-[#fafbfc] p-6 shadow-gold-soft"
                >
                  <div className="font-heading text-4xl font-bold text-gold-dark">
                    {figure.value}
                  </div>
                  <div className="mt-2 font-heading font-semibold text-marine">{figure.label}</div>
                  <div className="mt-2 text-sm text-muted">{figure.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pourquoi Madagascar — BLUE MARINE */}
      <section className="bg-marine py-24">
        <div ref={tableRef} className="wrap">
          <div className="eyb text-gold">Pourquoi Madagascar</div>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-[2.6rem]">
            Un pôle d&apos;excellence francophone dans l&apos;Océan Indien.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-blue-gray">
            Madagascar offre un différentiel de coût important tout en fournissant une main-d&apos;œuvre
            hautement qualifiée, issue de l&apos;enseignement supérieur francophone, et un fuseau
            horaire idéalement aligné sur la France.
          </p>
          <div
            data-reveal
            className="mt-10 overflow-x-auto rounded-lg border border-white/10"
          >
            <table className="w-full min-w-[680px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-white/5 p-5 text-left font-heading font-semibold text-white">
                    Destination
                  </th>
                  <th className="bg-gold p-5 text-left font-heading font-semibold text-marine">
                    Madagascar
                  </th>
                  <th className="bg-white/5 p-5 text-left font-heading font-semibold text-white">
                    Maghreb (Maroc / Tunisie)
                  </th>
                  <th className="bg-white/5 p-5 text-left font-heading font-semibold text-white">
                    Europe de l&apos;Est
                  </th>
                </tr>
              </thead>
              <tbody>
                {destinations.map((row) => (
                  <tr key={row.criterion} className="border-t border-white/10">
                    <th className="bg-white/5 p-5 text-left align-top font-heading font-semibold text-white">
                      {row.criterion}
                    </th>
                    <td className="bg-gold/15 p-5 align-top font-medium text-white">
                      {row.madagascar}
                    </td>
                    <td className="p-5 align-top text-blue-gray">{row.maghreb}</td>
                    <td className="p-5 align-top text-blue-gray">{row.europeEst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs italic text-blue-gray">
            Fourchettes indicatives de marché, à titre de comparaison.
          </p>
        </div>
      </section>

      {/* 4. Amélioration continue — WHITE */}
      <section className="bg-white py-24">
        <div ref={stepsRef} className="wrap">
          <div className="eyb">Amélioration continue</div>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-marine sm:text-[2.6rem]">
            Comment nous travaillons avec vous, en 4 étapes.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Un cadre contractuel clair et un cycle d&apos;amélioration continue du service : vous
            gardez la maîtrise technique, nous sécurisons tout le reste.
          </p>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                data-reveal
                className="rounded-lg border border-line bg-[#fafbfc] p-6 shadow-gold-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="font-heading text-2xl font-bold text-gold-dark">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-marine">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-gold-dark">
            <span className="h-px w-8 bg-gold-dark" />
            Cycle d&apos;amélioration continue
            <span className="h-px flex-1 bg-line" />
          </div>
        </div>
      </section>

      {/* 5. Gouvernance & engagements — BLUE MARINE */}
      <section className="bg-marine py-24">
        <div ref={governanceRef} className="wrap">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="eyb text-gold">Gouvernance &amp; engagements</div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-[2.6rem]">
                L&apos;éthique comme socle, l&apos;excellence comme cap.
              </h2>
            </div>
            <p className="text-base leading-7 text-blue-gray">
              Confier une partie de sa production est une vraie décision d&apos;entreprise. Voici
              les engagements concrets qui la sécurisent, pour vous comme pour nos équipes.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {governanceItems.map((item) => (
              <div
                key={item.title}
                data-reveal
                className="flex gap-4 rounded-lg border border-white/10 bg-marine-deep p-6"
              >
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rotate-45 bg-gold" />
                <div>
                  <h3 className="text-lg font-semibold text-gold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-blue-gray">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ — WHITE */}
      <section className="bg-white py-24">
        <div ref={faqRef} className="wrap max-w-3xl">
          <div className="eyb">Foire aux questions</div>
          <h2 className="mt-4 text-3xl font-semibold text-marine sm:text-[2.8rem]">
            Réassurance &amp; contrat.
          </h2>
          <p className="mt-6 max-w-xl leading-7 text-muted">
            Les réponses aux questions les plus fréquentes sur notre modèle, notre cadre
            contractuel et notre gestion opérationnelle.
          </p>
          <FaqAccordion />
        </div>
      </section>

      {/* 7. CTA — WHITE, juste avant le Footer marine */}
      <section className="border-t border-line bg-white py-20 text-center">
        <div ref={ctaRef} className="wrap">
          <div data-reveal className="eyb">
            Passons à l&apos;action
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-marine sm:text-[2.6rem]">
            Envie d&apos;échanger sur votre besoin ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
            Un échange de 30 minutes suffit pour cadrer votre besoin et évaluer si notre modèle
            vous convient.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btns">
              Discutons de votre projet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
