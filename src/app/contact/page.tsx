import type { Metadata } from 'next';
import ContactContent from '@/components/contact-content';

export const metadata: Metadata = {
  title: "Contact · Renfort de bureau d'études",
  description:
    "Un échange dédié, sans engagement, pour évaluer vos besoins de renfort technique ou déposer votre candidature. Réponse sous 24h ouvrées.",
  alternates: { canonical: 'https://etayons.fr/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
