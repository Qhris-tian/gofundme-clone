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
      },
      animation: {
        'infinite-scroll': 'scroll-right 50s linear infinite',
        'infinite-scroll-left': 'scroll-left 50s linear infinite'
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    }
  },
  plugins: []
}
