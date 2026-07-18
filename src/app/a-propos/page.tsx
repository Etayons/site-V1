import type { Metadata } from 'next';
import AboutContent from '@/components/about-content';

export const metadata: Metadata = {
  title: "Notre modèle d'externalisation de BE",
  description:
    "Nous bâtissons des passerelles techniques durables entre la France et Madagascar, sur un socle d'éthique et de rigueur. Relais dédié, démarrage en 3 semaines.",
  alternates: { canonical: 'https://etayons.fr/a-propos' },
};

export default function AboutPage() {
  return <AboutContent />;
}
