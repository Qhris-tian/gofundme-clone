/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#008748',
        hover: '#3333330d'
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms'
      }
    }
  },
  plugins: []
}
