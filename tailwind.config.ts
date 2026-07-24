import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        marine: 'oklch(var(--background) / <alpha-value>)',
        'marine-deep': 'oklch(var(--background-deep) / <alpha-value>)',
        gold: 'oklch(var(--primary) / <alpha-value>)',
        'gold-dark': 'oklch(var(--primary-strong) / <alpha-value>)',
        // Or assombri pour texte sur fond clair (WCAG AA, 4,78:1)
        'gold-onlight': 'oklch(var(--primary-on-light) / <alpha-value>)',
        'blue-gray': 'oklch(var(--foreground-on-dark) / <alpha-value>)',
        muted: 'oklch(var(--muted-foreground) / <alpha-value>)',
        line: 'oklch(var(--border-light) / <alpha-value>)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--radius-sm)',
        lg: 'calc(var(--radius) + 0.25rem)',
      },
      boxShadow: {
        gold: 'var(--shadow-gold)',
        'gold-soft': 'var(--shadow-gold-soft)',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1200px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 320ms cubic-bezier(0.16,1,0.3,1)',
        'accordion-up': 'accordion-up 220ms cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [],
};

export default config;
