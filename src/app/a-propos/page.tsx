import type { Metadata } from 'next';
import AboutContent from '@/components/about-content';

export const metadata: Metadata = {
  title: "Sous-traitance de bureau d'études pour entreprises françaises",
  description:
    "Etayons donne aux bureaux d'études français un renfort technique francophone dédié, synchrone avec l'Europe, pour absorber surcharges et pics d'activité sans recruter. Démarrage en 3 semaines.",
  alternates: { canonical: 'https://etayons.fr/a-propos' },
};

export default function AboutPage() {
  return <AboutContent />;
}
