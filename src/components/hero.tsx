'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const entrance = [
        gsap.from('[data-hero="reveal"]', {
          y: reduced ? 0 : 28,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
        }),
        gsap.to('[data-hexa="outer"]', { autoAlpha: 1, duration: 1.4, ease: 'power2.out' }),
        gsap.to('[data-hexa="inner"]', { autoAlpha: 0.6, duration: 1.4, delay: 0.2, ease: 'power2.out' }),
        gsap.to('[data-hexa="core"]', { autoAlpha: 1, duration: 1.4, delay: 0.4, ease: 'power2.out' }),
      ];

      // Filet de sécurité : si rAF est suspendu (onglet en arrière-plan),
      // le contenu ne doit jamais rester invisible.
      const failSafe = setTimeout(() => entrance.forEach((t) => t.progress(1)), 2500);

      if (reduced) return () => clearTimeout(failSafe);

      const spin = gsap.timeline({ repeat: -1 });
      spin
        .to('[data-hexa="outer"]', { rotation: 360, transformOrigin: '50% 50%', duration: 90, ease: 'none' }, 0)
        .to('[data-hexa="inner"]', { rotation: -360, transformOrigin: '50% 50%', duration: 70, ease: 'none' }, 0);

      const observer = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting) spin.play();
        else spin.pause();
      });
      if (scope.current) observer.observe(scope.current);

      return () => {
        clearTimeout(failSafe);
        observer.disconnect();
      };
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      /* Mobile : hauteur dictée par le contenu, pour ne pas déborder en paysage.
         Desktop : pleine hauteur en `svh`, qui ignore la barre d'URL mobile
         contrairement à `vh` et évite le saut de mise en page au défilement. */
      className="gridbg relative flex flex-col justify-center overflow-hidden bg-marine text-white sm:min-h-[540px] lg:min-h-[calc(100svh-96px)]"
    >
      <div
        className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, oklch(0.78 0.14 78) 0%, transparent 70%)' }}
      />
      <div className="wrap relative grid w-full items-center gap-12 py-16 lg:grid-cols-[1.8fr_1fr]">
        <div>
          <div data-hero="reveal" className="glass inline-block px-4 py-2">
            <span className="eyb text-gold">Ingénierie · Bureau d&apos;études externalisé</span>
          </div>
          <h1
            data-hero="reveal"
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[4.2rem]"
          >
            Nous étayons
            <br />
            vos <span className="text-gold">équipes techniques.</span>
          </h1>
          <p data-hero="reveal" className="mt-8 max-w-xl text-lg leading-7 text-blue-gray">
            Renforcez votre capacité de production et sécurisez vos projets industriels, sans
            alourdir votre structure. Un relais de compétences hautement qualifié à Madagascar,
            synchrone avec votre bureau d&apos;études.
          </p>
          <div data-hero="reveal" className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btns">
              Discutons de votre projet
            </Link>
            <Link href="/a-propos" className="btnp">
              Notre modèle
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <svg viewBox="0 0 300 300" className="w-full" role="img" aria-label="Emblème hexagonal Etayons">
            <polygon
              data-hexa="outer"
              points="150,20 260,85 260,215 150,280 40,215 40,85"
              fill="none"
              stroke="oklch(0.65 0.13 70)"
              strokeWidth="2"
              opacity="0"
            />
            <polygon
              data-hexa="inner"
              points="150,50 235,100 235,200 150,250 65,200 65,100"
              fill="none"
              stroke="oklch(0.65 0.13 70)"
              strokeWidth="1.3"
              opacity="0"
            />
            <polygon
              data-hexa="core"
              points="150,95 200,124 200,182 150,211 100,182 100,124"
              fill="oklch(0.78 0.14 78)"
              opacity="0"
            />
            <text
              x="150"
              y="160"
              textAnchor="middle"
              fill="oklch(0.24 0.06 258)"
              fontFamily="var(--font-poppins)"
              fontWeight="700"
              fontSize="19"
            >
              ETAYONS
            </text>
          </svg>
        </div>
      </div>
      <div className="hair absolute bottom-0 left-0 right-0" />
    </section>
  );
}
