/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080808',
        ivory: '#F4F0EA',
        purewhite: '#FFFFFF',
        'signature-red': '#D71920',
        charcoal: '#1A1A1A',
        'charcoal-dark': '#121212',
        'charcoal-light': '#242424',
        'red-accent': '#E0242B',
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        arabic: ['"Tajawal"', '"Amiri"', 'sans-serif'],
        'arabic-serif': ['"Amiri"', 'serif'],
      },
      boxShadow: {
        'red-glow': '0 0 35px -5px rgba(215, 25, 32, 0.45)',
        'red-subtle': '0 0 20px -3px rgba(215, 25, 32, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(215, 25, 32, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
