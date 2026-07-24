/** @type {import('next').NextConfig} */

// Content-Security-Policy calibrée sur les ressources réellement chargées par le site.
// 'unsafe-inline'/'unsafe-eval' restent nécessaires : Next.js injecte des scripts
// inline (hydratation), GTM en fait autant, et on a des JSON-LD inline. La CSP
// restreint malgré tout les *sources externes* autorisées, ce qui bloque l'essentiel
// des injections. Domaines : GTM, Google Analytics, Mon Petit Cookie, Unsplash, Web3Forms.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "upgrade-insecure-requests",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://mon-petit-cookie.fr",
  "style-src 'self' 'unsafe-inline' https://mon-petit-cookie.fr",
  "img-src 'self' data: https://images.unsplash.com https://www.googletagmanager.com https://*.google-analytics.com https://mon-petit-cookie.fr",
  "font-src 'self' data:",
  "connect-src 'self' https://api.web3forms.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://mon-petit-cookie.fr",
  "frame-src 'self' https://www.googletagmanager.com",
].join('; ');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
  images: {
    // Sert automatiquement les images en AVIF puis WebP, en tailles responsive.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/carriere/electricite',
        destination: '/carriere/responsable-etudes-prix',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
