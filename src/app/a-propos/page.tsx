import type { Metadata } from 'next';
import AboutContent from '@/components/about-content';
import { pageOpenGraph } from '@/lib/metadata';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: "Sous-traitance de bureau d'études pour entreprises françaises",
  description:
    "Etayons donne aux bureaux d'études français un renfort technique francophone dédié, synchrone avec l'Europe, pour absorber surcharges et pics d'activité sans recruter. Démarrage en 3 semaines.",
  alternates: { canonical: 'https://etayons.fr/a-propos' },
  openGraph: pageOpenGraph('/a-propos'),
};

// Donnée structurée FAQ : rend les questions/réponses lisibles par Google et
// ses réponses IA. La première question définit explicitement l'entité « Etayons ».
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutContent />
    </>
  );
}
