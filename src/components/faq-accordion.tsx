'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { faqItems } from '@/data/faq';

function PlusIcon() {
  return (
    <span
      className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border-2 border-gold-dark text-gold-dark transition-[transform,background-color,border-color,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:rotate-45 group-data-[state=open]:border-gold group-data-[state=open]:bg-gold group-data-[state=open]:text-marine"
      aria-hidden="true"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function FaqAccordion() {
  return (
    <Accordion.Root type="multiple" className="mt-14">
      {faqItems.map((item) => (
        <Accordion.Item
          key={item.question}
          value={item.question}
          data-reveal
          className="border-b border-line"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left font-heading text-lg font-semibold text-marine outline-none hover:text-gold-dark focus-visible:ring-2 focus-visible:ring-gold">
              <span>{item.question}</span>
              <PlusIcon />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="mb-8 rounded-r border-l-[3px] border-gold-dark bg-[#f7f8fa] p-6 leading-8 text-muted">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
