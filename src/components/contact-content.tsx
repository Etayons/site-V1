'use client';

import { useRef, type ReactNode } from 'react';
import ContactForm from '@/components/contact-form';
import { EyebrowBadge } from '@/components/eyebrow-badge';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  );
}

function InfoRow({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div data-reveal className="flex gap-4">
      <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-white/15 bg-white/5 text-gold">
        {icon}
      </div>
      <div>
        <div className="eyb text-white/50">{title}</div>
        <div className="mt-1 space-y-0.5 text-sm leading-6 text-blue-gray">{children}</div>
      </div>
    </div>
  );
}

export default function ContactContent() {
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollReveal(panelRef);

  return (
    <section className="bg-[#fafbfc] py-16 sm:py-20">
      <div className="wrap">
        <div
          ref={panelRef}
          className="grid overflow-hidden rounded-2xl border border-line shadow-gold-soft lg:grid-cols-[1fr_1.3fr]"
        >
          <div className="gridbg relative flex flex-col justify-start bg-marine px-8 py-14 text-white sm:px-12 sm:py-16">
            <div data-reveal>
              <EyebrowBadge>Prise de contact</EyebrowBadge>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Discutons de <span className="text-gold">votre projet.</span>
              </h1>
              <p className="mt-5 max-w-sm text-blue-gray">
                Un échange dédié, sans engagement, pour évaluer vos besoins ou votre profil.
              </p>
            </div>

            <div className="mt-10 space-y-6">
              <InfoRow icon={<PinIcon />} title="Bureau France">
                <p>Paris, France</p>
              </InfoRow>
              <InfoRow icon={<ClockIcon />} title="Siège opérationnel">
                <p>Antananarivo, Madagascar</p>
                <p>Fuseau optimal : +1h l&apos;été, +2h l&apos;hiver avec Paris.</p>
              </InfoRow>
              <InfoRow icon={<MailIcon />} title="Direct">
                <a href="mailto:contact@etayons.fr" className="block font-medium text-gold-dark no-underline">
                  contact@etayons.fr
                </a>
                <p>+33 6 09 99 53 88</p>
                <p>Réponse sous 24h ouvrées.</p>
              </InfoRow>
              <InfoRow icon={<ShieldIcon />} title="Cadre">
                <p>Contrats B2B flexibles</p>
                <p>NDA systématique</p>
                <p>Confidentialité industrielle</p>
              </InfoRow>
            </div>
          </div>

          <div data-reveal className="flex items-center bg-white px-6 py-10 sm:px-10 sm:py-14">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
