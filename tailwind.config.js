/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#101113',
        primaryWhite: 'rgba(255, 255, 255, 0.1)',
        SecondaryWhite: 'rgba(255, 255, 255, 0.3)',
        primaryButton: '#854BFE',
        secondaryRed:
          'linear-gradient(180deg, #DA4949 0%, rgba(73, 96, 218, 0.95) 100%)',
      },
      fontFamily: {
        MonumentExtended: 'MonumentExtended',
        sans: ['proxima'],
        proxima: 'proxima',
      },
    },
  },
  plugins: [],
};
