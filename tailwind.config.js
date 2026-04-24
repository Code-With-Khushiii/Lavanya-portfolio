/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Baskervville', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#f1ede9',
        brown: '#504c44',
        black: '#000000',
        white: '#ffffff',
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
};