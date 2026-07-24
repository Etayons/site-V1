import Image from 'next/image';
import Link from 'next/link';
import { jobs } from '@/data/jobs';

const guarantees = ['Essai de 3 mois', 'Remplacement sous 30 jours', 'NDA systématique'];

export default function Footer() {
  return (
    <footer className="bg-marine-deep text-white/70">
      <div className="wrap pt-16">
        <div className="grid items-start gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-etayons.png"
                alt="Logo Etayons"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <div className="font-heading text-xl font-bold tracking-[0.08em] text-white">
                  ETAYONS
                </div>
                <div className="mt-0.5 text-[10px] font-medium tracking-[0.28em] text-gold">
                  TALENTS · EXPERTISE · PERFORMANCE
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7">
              Nous étayons vos équipes techniques. Un relais de compétences francophones hautement
              qualifiées, synchrone avec votre bureau d&apos;études.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-wider">
              {guarantees.map((g) => (
                <span
                  key={g}
                  className="border px-3 py-1.5 text-gold"
                  style={{ borderColor: 'color-mix(in oklab, oklch(0.65 0.13 70) 60%, transparent)' }}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <aside
            aria-label="Démarrer un Relais"
            className="border bg-marine p-8"
            style={{ borderColor: 'color-mix(in oklab, oklch(0.65 0.13 70) 40%, transparent)' }}
          >
            <div className="eyb text-gold">Un pic de charge ?</div>
            <div className="mt-3 font-heading text-xl font-semibold leading-snug text-white">
              Votre Relais peut démarrer dans 3 semaines.
            </div>
            <div className="mt-5">
              <Link href="/contact" className="btns">
                Discutons de votre projet
              </Link>
            </div>
            <a
              href="mailto:contact@etayons.fr"
              className="mt-4 block text-sm text-white/70 no-underline"
            >
              ou écrivez-nous : <span className="text-gold">contact@etayons.fr</span>
            </a>
          </aside>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-labelledby="footer-nav">
            <h2 id="footer-nav" className="eyb text-white/50">
              Navigation
            </h2>
            <ul className="m-0 mt-2 flex list-none flex-col p-0 text-sm">
              <li><Link href="/" className="navl text-white/70">Accueil</Link></li>
              <li><Link href="/a-propos" className="navl text-white/70">À propos</Link></li>
              <li><Link href="/carriere" className="navl text-white/70">Carrière</Link></li>
              <li><Link href="/blog" className="navl text-white/70">Blog</Link></li>
              <li><Link href="/contact" className="navl text-white/70">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-metiers">
            <h2 id="footer-metiers" className="eyb text-white/50">
              Nos métiers
            </h2>
            <ul className="m-0 mt-2 flex list-none flex-col p-0 text-sm">
              {jobs.map((job) => (
                <li key={job.slug}>
                  <Link href={`/carriere/${job.slug}`} className="navl text-white/70">
                    {job.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="eyb text-white/50">Contact</h2>
            <address className="mt-4 text-sm not-italic leading-8">
              <a href="mailto:contact@etayons.fr" className="text-white/70 no-underline">
                contact@etayons.fr
              </a>
              <br />
              Antananarivo, Madagascar
              <br />
              <span className="text-xs text-white/50">+1h l&apos;été, +2h l&apos;hiver avec Paris</span>
            </address>
            <ul className="m-0 mt-4 flex list-none gap-3 p-0">
              <li><a
                href="https://www.linkedin.com/company/etayons/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Etayons sur LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center border-2 border-gold-dark text-gold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24V8.31zM8.34 8.31h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.51v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23H8.34V8.31z" />
                </svg>
              </a></li>
              <li><a
                href="https://www.facebook.com/profile.php?id=61591479466263"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Etayons sur Facebook"
                className="inline-flex h-11 w-11 items-center justify-center border-2 border-gold-dark text-gold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.02 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.09 24 12.07z" />
                </svg>
              </a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            © {new Date().getFullYear()} Etayons. Tous droits réservés.
            <span aria-hidden="true">·</span>
            <Link href="/mentions-legales" className="text-white/50 underline">
              Mentions légales
            </Link>
            <span aria-hidden="true">·</span>
            <a
              href="https://mon-petit-cookie.fr/legal/019f5231-4f54-7e63-8f46-11a2d107ca22/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 underline"
            >
              Politique de confidentialité
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://mon-petit-cookie.fr/legal/019f5231-4f54-7e63-8f46-11a2d107ca22/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 underline"
            >
              Politique de cookies
            </a>
          </span>
          <span className="uppercase tracking-[0.2em] text-gold/70">
            Ingénierie · Bureaux d&apos;études · Industrie
          </span>
        </div>
      </div>
    </footer>
  );
}
