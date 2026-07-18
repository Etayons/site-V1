'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ComparisonRow {
  criterion: string;
  salarie: string;
  freelance: string;
  etayons: string;
}

const rows: ComparisonRow[] = [
  {
    criterion: "Délai moyen d'intégration",
    salarie: '3 à 6 mois',
    freelance: '2 à 4 semaines',
    etayons: '2 à 3 semaines',
  },
  {
    criterion: 'Tarification unitaire moyenne',
    salarie: '~5 200 € / mois (chargé)',
    freelance: '350 € à 550 € / jour',
    etayons: '1 500 € à 2 500 € / mois',
  },
  {
    criterion: "Coût d'acquisition du profil",
    salarie: '~8 000 € en moyenne',
    freelance: '0 € (frais intermédiaires exclus)',
    etayons: "0 € (inclus dans l'offre)",
  },
  {
    criterion: 'Équipement et licences DAO',
    salarie: "À la charge de l'employeur",
    freelance: 'Inclus dans le TJM',
    etayons: 'Entièrement inclus',
  },
  {
    criterion: 'Garantie de continuité de service',
    salarie: 'Non (congés, maladie)',
    freelance: 'Non (rupture unilatérale possible)',
    etayons: 'Oui (remplacement immédiat géré)',
  },
  {
    criterion: 'Engagement et flexibilité',
    salarie: 'Rigide (droit du travail)',
    freelance: 'Souple (selon bon de commande)',
    etayons: 'Totale (contrat cadre, sans engagement de durée)',
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-gold-dark"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

const etayonsCellBorders = {
  borderLeft: '2px solid oklch(var(--primary-strong))',
  borderRight: '2px solid oklch(var(--primary-strong))',
};

export default function ComparisonTable() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, { slide: false });

  return (
    <div ref={scope}>
      <div className="mt-10 overflow-x-auto rounded-lg border border-line bg-white shadow-gold-soft">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-marine-deep p-5 text-left font-heading font-semibold text-blue-gray">
                Paramètre d&apos;évaluation
              </th>
              <th className="bg-marine p-5 text-left font-heading font-semibold text-white">
                Salarié interne (France)
              </th>
              <th className="bg-marine p-5 text-left font-heading font-semibold text-white">
                Freelance spécialisé (France)
              </th>
              <th
                className="bg-gold p-5 text-left font-heading font-semibold text-marine"
                style={etayonsCellBorders}
              >
                Relais dédié Etayons (Madagascar)
                <span className="mt-2 block w-fit rounded-sm bg-marine px-2 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-gold">
                  Recommandé
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.criterion}
                data-reveal
                className="group border-t border-line transition-colors hover:bg-[#fafbfc]"
              >
                <th
                  className="sticky left-0 z-10 w-[22%] bg-[#fafbfc] p-5 text-left align-top font-heading font-semibold text-marine"
                  style={{ boxShadow: '3px 0 6px rgba(0,0,0,0.05)' }}
                >
                  {row.criterion}
                </th>
                <td className="p-5 align-top text-muted">{row.salarie}</td>
                <td className="p-5 align-top text-muted">{row.freelance}</td>
                <td
                  className="bg-gold/10 p-5 align-top font-medium text-marine transition-colors group-hover:bg-gold/20"
                  style={etayonsCellBorders}
                >
                  <span className="inline-flex items-start gap-2">
                    <CheckIcon />
                    {row.etayons}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-5 text-xs italic text-muted">
        Ordres de grandeur indicatifs (marché 2026), hors devis personnalisé.
      </p>
    </div>
  );
}
