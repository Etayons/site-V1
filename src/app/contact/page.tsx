import type { Metadata } from 'next';
import ContactContent from '@/components/contact-content';

export const metadata: Metadata = {
  title: "Renfort de bureau d'études en France · Devis et contact",
  description:
    "Besoin de renfort pour votre bureau d'études ? Parlons de votre plan de charge, sans engagement. Devis rapide, réponse sous 24h ouvrées, équipe technique francophone.",
  alternates: { canonical: 'https://etayons.fr/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
