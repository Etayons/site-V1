'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { caseStudies } from '@/data/case-studies';

gsap.registerPlugin(useGSAP);

const AUTOPLAY_INTERVAL_MS = 5000;

export default function CaseStudyTabs() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [userTookControl, setUserTookControl] = useState(false);
  const scope = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isHovering || userTookControl) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % caseStudies.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isHovering, userTookControl]);

  useGSAP(
    () => {
      const tab = tabRefs.current[active];
      if (!tab || !indicatorRef.current) return;

      if (isFirstRender.current) {
        isFirstRender.current = false;
        gsap.set(indicatorRef.current, { x: tab.offsetLeft, width: tab.offsetWidth });
        return;
      }

      const tweens = [
        gsap.to(indicatorRef.current, {
          x: tab.offsetLeft,
          width: tab.offsetWidth,
          duration: 0.35,
          ease: 'power3.out',
        }),
        gsap.fromTo(
          '[data-panel]',
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        ),
      ];

      // Filet de sécurité : jamais de contenu invisible si rAF est suspendu
      const failSafe = setTimeout(() => tweens.forEach((t) => t.progress(1)), 1000);
      return () => clearTimeout(failSafe);
    },
    { dependencies: [active], scope }
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    const last = caseStudies.length - 1;
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    setUserTookControl(true);
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function selectTab(i: number) {
    setUserTookControl(true);
    setActive(i);
  }

  const study = caseStudies[active];
  if (!study) return null;

  return (
    <div
      ref={scope}
      className="mt-14"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        role="tablist"
        aria-label="Cas clients par métier"
        onKeyDown={handleKeyDown}
        className="glass relative flex gap-1 overflow-x-auto p-1 lg:grid lg:grid-cols-6 lg:overflow-visible"
      >
        {caseStudies.map((cs, i) => (
          <button
            key={cs.role}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`uc-tab-${i}`}
            aria-selected={i === active}
            aria-controls="uc-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => selectTab(i)}
            className={`relative z-10 flex items-center justify-center whitespace-nowrap rounded px-4 py-2.5 text-center font-heading text-xs font-semibold uppercase tracking-[0.1em] transition-colors lg:whitespace-normal lg:px-2 lg:text-[10px] lg:leading-tight lg:tracking-[0.03em] ${
              i === active ? 'text-marine' : 'text-white/70 hover:text-gold'
            }`}
          >
            {cs.role}
          </button>
        ))}
        <span
          ref={indicatorRef}
          aria-hidden
          className="absolute left-0 top-1 z-0 h-[calc(100%-8px)] rounded bg-gold"
        />
      </div>

      <div
        id="uc-panel"
        role="tabpanel"
        aria-labelledby={`uc-tab-${active}`}
        data-panel
        className="mt-6 grid overflow-hidden rounded-lg border bg-marine-deep lg:grid-cols-[1fr_1.3fr]"
        style={{ borderColor: 'oklch(var(--primary-strong) / 0.45)' }}
      >
        <div className="relative min-h-[340px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.image}
            alt={study.role}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, oklch(var(--background) / 0.55), transparent 70%)',
            }}
          />
          <div className="absolute left-5 top-5 rounded-sm bg-gold px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-marine">
            {study.role}
          </div>
        </div>
        <div className="p-8 lg:p-11">
          <h3 className="text-2xl font-semibold leading-tight text-white">{study.title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/75">{study.context}</p>
          <div className="mt-5 rounded-r border-l-[3px] border-gold pl-4 font-heading font-semibold text-gold">
            {study.result}
          </div>
          <div className="mt-6">
            <div className="eyb text-[0.65rem] text-gold">Compétences techniques</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {study.technicalSkills.map((skill) => (
                <span key={skill} className="tag-gold">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="eyb text-[0.65rem] text-white/55">Compétences humaines</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {study.humanSkills.map((skill) => (
                <span key={skill} className="tag-white">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
