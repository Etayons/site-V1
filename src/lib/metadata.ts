import type { Metadata } from 'next';

const BASE_URL = 'https://etayons.fr';

/**
 * Construit l'objet Open Graph d'une page avec sa propre URL canonique.
 *
 * Next.js ne fusionne pas en profondeur les métadonnées : dès qu'une page
 * déclare `openGraph`, elle remplace entièrement celui du layout. Ce helper
 * reconstitue les champs partagés (type, locale, siteName, image) tout en
 * fixant l'`url` correcte de la page. `og:title` et `og:description` se
 * remplissent automatiquement à partir du titre et de la description de la page.
 */
export function pageOpenGraph(path: string): Metadata['openGraph'] {
  return {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Etayons',
    url: `${BASE_URL}${path}`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Etayons, bureau d'études externalisé, relais technique francophone à Madagascar",
      },
    ],
  };
}
