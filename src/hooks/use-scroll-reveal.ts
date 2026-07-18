import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';

const STAGGER_S = 0.08;
const DURATION_S = 0.5;

/**
 * Révélation au scroll via IntersectionObserver plutôt que GSAP ScrollTrigger :
 * ScrollTrigger précalcule des positions pixel qui deviennent obsolètes au
 * moindre décalage de mise en page (polices, hydratation), laissant du
 * contenu bloqué à opacité 0 chez de vrais utilisateurs. IntersectionObserver
 * réévalue l'intersection réelle à chaque déclenchement, sans ce risque.
 */
interface ScrollRevealOptions {
  stagger?: number;
  /** false pour les conteneurs avec descendants `position: sticky` — un
   *  transform GSAP (même y:0) sur un ancêtre casse le sticky. */
  slide?: boolean;
}

export function useScrollReveal(
  scope: RefObject<HTMLElement | null>,
  { stagger = STAGGER_S, slide = true }: ScrollRevealOptions = {}
) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (items.length === 0) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const restingVars = slide ? { autoAlpha: 1, y: 0 } : { autoAlpha: 1 };
    if (reduced) {
      gsap.set(items, restingVars);
      return;
    }

    gsap.set(items, slide ? { autoAlpha: 0, y: 16 } : { autoAlpha: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target);
        if (visible.length === 0) return;
        gsap.to(visible, {
          ...restingVars,
          duration: DURATION_S,
          stagger,
          ease: 'power2.out',
        });
        visible.forEach((el) => observer.unobserve(el));
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((el) => observer.observe(el));

    // Filet de sécurité : gsap.set (pas .to) pour rester indépendant de rAF,
    // qui peut être suspendu (onglet en arrière-plan) et bloquer une tween animée.
    const failSafe = setTimeout(() => gsap.set(items, restingVars), 4000);

    return () => {
      observer.disconnect();
      clearTimeout(failSafe);
    };
  }, [scope, stagger, slide]);
}
