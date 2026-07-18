import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false },
  alternates: { canonical: 'https://etayons.fr/mentions-legales' },
};

export default function LegalPage() {
  return (
    <section className="py-20">
      <div className="wrap max-w-3xl">
        <div className="eyb">Informations légales</div>
        <h1 className="mt-4 text-3xl font-bold text-marine sm:text-4xl">Mentions légales</h1>

        <div className="mt-10 space-y-8 text-sm leading-7 text-muted">
          <div>
            <h2 className="text-lg font-semibold text-marine">Éditeur du site</h2>
            <p className="mt-2">
              Etayons
              <br />
              ITO 20 Bis B, Ambodifasika, Itaosy
              <br />
              Antananarivo, Madagascar
              <br />
              Email : contact@etayons.fr
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-marine">Hébergement</h2>
            <p className="mt-2">
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              <br />
              vercel.com
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-marine">Données personnelles</h2>
            <p className="mt-2">
              Les informations transmises via le formulaire de contact sont utilisées uniquement
              pour répondre à votre demande. Elles ne sont jamais transmises à des tiers. Vous
              disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos
              données en écrivant à contact@etayons.fr.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-marine">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus de ce site (textes, visuels, logo) est la propriété
              d&apos;Etayons. Toute reproduction sans autorisation préalable est interdite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
