import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';

// Identifiant du conteneur Google Tag Manager (public par nature).
const GTM_ID = 'GTM-NXBW6HD6';

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
      <head>
        {/* Google Tag Manager. `afterInteractive` : chargé juste après
            l'hydratation, sans bloquer le rendu de la page. */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) : premier élément du body, comme requis. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
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
