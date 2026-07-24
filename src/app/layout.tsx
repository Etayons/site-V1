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
  // Validation de propriété Google Search Console (méthode balise HTML).
  verification: { google: '0NgwNnTNzwgetfKjzdlXiY2xRYKGDF-Cor9P9-vpbKw' },
};

// Entité Organisation. Le `@id` sert d'ancre pour que les autres schémas
// (WebSite, articles) pointent vers la même entité. Objectif référencement :
// aider Google à distinguer la marque « Etayons » du verbe « étayer ».
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://etayons.fr/#organization',
  name: 'Etayons',
  legalName: 'Etayons',
  url: 'https://etayons.fr/',
  logo: 'https://etayons.fr/logo-etayons.png',
  image: 'https://etayons.fr/og-image.png',
  slogan: 'Nous étayons vos équipes techniques',
  description:
    "Externalisation de bureau d'études : relais de compétences techniques francophones à Madagascar, synchrone avec l'Europe.",
  email: 'contact@etayons.fr',
  telephone: '+33609995388',
  knowsLanguage: ['fr'],
  areaServed: ['France', 'Europe francophone'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ITO 20 Bis B, Ambodifasika, Itaosy',
    addressLocality: 'Antananarivo',
    addressCountry: 'MG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@etayons.fr',
    telephone: '+33609995388',
    availableLanguage: ['French'],
    areaServed: 'FR',
  },
  sameAs: [
    'https://www.linkedin.com/company/etayons/',
    'https://www.facebook.com/profile.php?id=61591479466263',
  ],
};

// Entité Site web, rattachée à l'Organisation. Renforce l'association entre le
// domaine et la marque « Etayons » aux yeux de Google.
const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://etayons.fr/#website',
  url: 'https://etayons.fr/',
  name: 'Etayons',
  description:
    "Bureau d'études externalisé : relais techniques francophones à Madagascar, synchrone avec l'Europe.",
  inLanguage: 'fr-FR',
  publisher: { '@id': 'https://etayons.fr/#organization' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Bandeau de consentement Mon Petit Cookie (CMP). Chargé avant GTM pour
            poser l'état de consentement au plus tôt. Intègre nativement Google
            Consent Mode v2 : il envoie le signal d'acceptation/refus à GTM,
            qui débloque alors GA4. `beforeInteractive` : chargé avant l'hydratation. */}
        <Script
          id="mon-petit-cookie"
          src="https://mon-petit-cookie.fr/api/widget/019f5231-4f54-7e63-8f46-11a2d107ca22.js"
          strategy="beforeInteractive"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
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
