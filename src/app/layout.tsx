import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://etayons.fr'),
  title: {
    default: "Bureau d'études externalisé à Madagascar | Etayons",
    template: '%s | Etayons',
  },
  description:
    "Renforcez votre bureau d'études avec un relais technique francophone à Madagascar, synchrone avec l'Europe : structure, VRD, BIM, électricité. Prêt en 3 semaines.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Etayons',
    url: 'https://etayons.fr/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Etayons, bureau d'études externalisé, relais technique francophone à Madagascar",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: { icon: '/logo-etayons.png' },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Etayons',
  url: 'https://etayons.fr/',
  logo: 'https://etayons.fr/logo-etayons.png',
  description:
    "Externalisation de bureau d'études : relais de compétences techniques francophones à Madagascar, synchrone avec l'Europe.",
  email: 'contact@etayons.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ITO 20 Bis B, Ambodifasika, Itaosy',
    addressLocality: 'Antananarivo',
    addressCountry: 'MG',
  },
  sameAs: [
    'https://www.linkedin.com/company/etayons/',
    'https://www.facebook.com/profile.php?id=61591479466263',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#contenu" className="skip">
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
