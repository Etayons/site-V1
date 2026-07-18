'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/carriere', label: 'Carrière' },
  { href: '/blog', label: 'Blog' },
];

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-6">
      <span
        className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
          open ? 'top-[7px] rotate-45' : 'top-0'
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] block h-0.5 w-6 bg-current transition-opacity duration-200 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-6 bg-current transition-all duration-300 ${
          open ? 'top-[7px] -rotate-45' : 'top-3.5'
        }`}
      />
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // En-tête qui se condense au défilement (motion design V3)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Le menu se referme à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Échap pour fermer, clic à l'extérieur pour fermer, et blocage du défilement
  // de la page pendant que le panneau est ouvert.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || burgerRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-marine/95 shadow-md backdrop-blur">
      <div
        className={`wrap flex items-center justify-between gap-4 transition-[height] duration-300 ease-out ${
          scrolled ? 'h-[72px]' : 'h-20 sm:h-24'
        }`}
      >
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo-etayons.png"
            alt="Logo Etayons"
            width={72}
            height={72}
            className={`rounded-full transition-all duration-300 ease-out ${
              scrolled ? 'h-11 w-11 sm:h-12 sm:w-12' : 'h-12 w-12 sm:h-[68px] sm:w-[68px]'
            }`}
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-[0.08em] text-white sm:text-xl">
              ETAYONS
            </span>
            <span className="mt-1 hidden text-[9px] font-medium tracking-[0.28em] text-gold sm:block">
              TALENTS · EXPERTISE · PERFORMANCE
            </span>
          </span>
        </Link>

        {/* Navigation étendue, à partir de 1024px */}
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="m-0 flex list-none items-center gap-9 p-0">
            {navLinks.map((link) => {
              const isCurrent = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`navl ${isCurrent ? 'act' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link href="/contact" className="btnp hidden lg:inline-flex">
          Discutons de votre projet
        </Link>

        {/* Bouton menu, en dessous de 1024px */}
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded text-white lg:hidden"
        >
          <BurgerIcon open={open} />
        </button>
      </div>

      {/* Panneau déroulant */}
      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!open}
        className="border-t border-white/10 bg-marine lg:hidden"
      >
        <nav aria-label="Navigation principale mobile" className="wrap py-4">
          <ul className="m-0 flex list-none flex-col p-0">
            {navLinks.map((link) => {
              const isCurrent = pathname === link.href;
              return (
                <li key={link.href} className="border-b border-white/10 last:border-b-0">
                  <Link
                    href={link.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`flex min-h-[52px] items-center text-base font-medium no-underline ${
                      isCurrent ? 'text-gold' : 'text-white/90'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/contact" className="btns mt-5 w-full justify-center">
            Discutons de votre projet
          </Link>
        </nav>
      </div>
    </header>
  );
}
