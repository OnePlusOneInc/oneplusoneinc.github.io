/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      geist: ['Geist', 'sans-serif'], 
    },
    extend: {
      letterSpacing: {
        logo: '-3.5px',
      },
      backgroundColor: {
        light: '#FFF1E0',
        dark: '#1D1D20'
      },
      textColor: {
        primary: {
          dark: '#FFF1E0',
          light: '#1D1D20'
        }
      },
      colors: {
        'opo-orange': '#FF5C00',
        'opo-red': '#DE1E45',
      }},
  },
  plugins: [],
}

