import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page introuvable',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="gridbg flex min-h-[60vh] items-center bg-marine text-white">
      <div className="wrap text-center">
        <div className="font-heading text-7xl font-bold text-gold">404</div>
        <h1 className="mt-4 text-2xl font-semibold">Cette page n&apos;existe pas.</h1>
        <p className="mt-4 text-blue-gray">
          Le lien est peut-être obsolète, ou la page a été déplacée.
        </p>
        <div className="mt-8">
          <Link href="/" className="btns">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
