import type { Metadata } from 'next';
import CareersContent from '@/components/careers-content';

export const metadata: Metadata = {
  title: "Carrière en bureau d'études à Madagascar",
  description:
    "Intégrez un hub d'élite technique à Antananarivo, en collaboration directe avec des donneurs d'ordres européens de premier plan. CDI, statut cadre, projets Eurocode.",
  alternates: { canonical: 'https://etayons.fr/carriere' },
};

export default function CareersPage() {
  return <CareersContent />;
}
