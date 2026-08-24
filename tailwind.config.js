/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080D18',
          900: '#0B1220',
          800: '#101A2E',
          700: '#16223A',
          600: '#233150',
        },
        paper: {
          DEFAULT: '#F7F5EF',
          dim: '#EFEBE1',
        },
        slate: {
          50: '#F4F5F7',
          200: '#C7CCD6',
          400: '#8A93A3',
          500: '#5B6472',
          700: '#3A4150',
        },
        brass: {
          DEFAULT: '#B08D57',
          light: '#D4B483',
          dark: '#8A6C3F',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1280px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
