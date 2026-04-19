import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tab: '810px',
        desk: '1024px',
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#fafafa',
          100: '#f4f4f4',
          200: '#e5e5e5',
          300: '#e6e6e6',
          400: '#d4d4d4',
          500: '#605f5f',
          600: '#bdbdbd',
          700: '#aeaeae',
          800: '#999999',
          900: '#1a1a1a',
          950: '#0a0a0a',
        },
        accent: '#2eab60',
        panel: 'var(--color-panel)',
        'panel-strong': 'var(--color-panel-strong)',
        muted: 'var(--color-muted)',
        soft: 'var(--color-soft)',
        inverse: 'var(--color-inverse)',
        'inverse-muted': 'var(--color-inverse-muted)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['var(--font-switzer)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        'sidebar': '256px',
        'section': '64px',
      },
    },
  },
  plugins: [],
};

export default config;
