/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],

   darkMode: 'media', // or 'media' or 'class'
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
       
      },
      // colors: {
      //   'blue': '#1fb6ff',
      //   'purple': '#7e5bef',
      //   'pink': '#ff49db',
      //   'orange': '#ff7849',
      //   'green': '#13ce66',
      //   'yellow': '#ffc82c',
      //   'gray-dark': '#273444',
      //   'gray': '#8492a6',
      //   'gray-light': '#d3dce6',
      // },
      fontFamily: {
        sans: ['-apple-system', 'Segoe UI', 'Graphik', 'sans-serif', 'Roboto', 'Helvetica Neue', 'Noto Sans'],
        serif: ['serif', 'Merriweather', 'Times New Roman', 'ui-serif', 'Cambria', 'Georgia', 'Times'],
      },
      extend: {
        
      },
   },
   variants: {},
   plugins: [],
 }
