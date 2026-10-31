import type { Metadata } from 'next';
import Link from 'next/link';
import { EyebrowBadge } from '@/components/eyebrow-badge';
import { services } from '@/data/services';
import { pageOpenGraph } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Nos prestations pour bureaux d’études',
  description:
    'Renforcez votre bureau d’études avec un Relais dédié : modélisation BIM Revit ou calcul de structures béton armé. Experts francophones, période test de 3 mois.',
  alternates: { canonical: 'https://etayons.fr/services' },
  openGraph: pageOpenGraph('/services'),
};

export default function ServicesPage() {
  return (
    <>
      <section className="gridbg relative bg-marine pb-16 pt-28 text-white sm:pt-32">
        <div className="wrap">
          <EyebrowBadge>Prestations</EyebrowBadge>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Un expert technique dédié, dans votre équipe
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-gray">
            Choisissez le métier dont votre bureau d’études a besoin. Votre Relais travaille dans vos outils,
            sur vos horaires, sous votre direction technique.
          </p>
        </div>
        <div className="hair absolute bottom-0 left-0 right-0" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="pil">
              <div className="eyb text-[0.62rem]">{s.prixDepuis}</div>
              <h2 className="mt-2 text-xl font-semibold text-marine">{s.menuLabel}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{s.intro}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-gold-onlight">Voir la prestation →</span>
            </Link>
          ))}
        </div>
        <div className="wrap mt-10">
          <p className="text-sm text-muted">
            Un autre métier, comme l’économie de la construction ou les VRD ?{' '}
            <Link href="/contact" className="text-gold-onlight underline">
              Parlons de votre besoin
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
