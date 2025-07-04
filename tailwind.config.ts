import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'shadow-neuro-light',
    'shadow-neuro-dark', 
    'shadow-neuro-outset-light',
    'shadow-neuro-outset-dark',
    'shadow-neuro-inset-light',
    'shadow-neuro-inset-dark',
    'shadow-neuro-button-light',
    'shadow-neuro-button-dark',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: [
          "Playfair Display",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        'neuro-light': 'inset 4px 4px 10px rgba(0,0,0,0.05), inset -4px -4px 10px var(--bg-lighter)',
        'neuro-dark': 'inset 4px 4px 8px rgba(0,0,0,0.3), inset -4px -4px 8px var(--bg-lighter)',
        'neuro-outset-light': '4px 4px 10px rgba(0,0,0,0.1), -4px -4px 10px var(--bg-lighter)',
        'neuro-outset-dark': '4px 4px 8px rgba(0,0,0,0.3), -4px -4px 8px var(--bg-lighter)',
        'neuro-inset-light': 'inset 2px 3px 4px rgba(0,0,0,0.3), inset -1.5px -2.5px 4px var(--bg-lighter)',
        'neuro-inset-dark': 'inset 2px 3px 4px rgba(0,0,0,0.5), inset -1.5px -2.5px 4px var(--bg-lighter)',
        'neuro-button-light': '2px 3px 4px rgba(0,0,0,0.3), -1.5px -2.5px 4px var(--bg-lighter)',
        'neuro-button-dark': '2px 3px 4px rgba(0,0,0,0.5), -1.5px -2.5px 4px var(--bg-lighter)',
      },
    },
  },
  plugins: [],
} satisfies Config;
