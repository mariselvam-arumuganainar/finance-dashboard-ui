/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          darker: 'var(--bg-darker)',
          main: 'var(--bg-main)',
          card: 'var(--bg-card)',
        },
        muted: '#8a8a98',
        main: '#ffffff',
        // We will use CSS variables for theme-specific colors
        theme: {
          primary: 'var(--primary)',
          glow: 'var(--primary-glow)',
          soft: 'var(--primary-soft)',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        'dashboard': '20px',
      }
    },
  },
  plugins: [],
}
