/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens:{
     
      'xs':{'min': '0px', 'max': '412px'},
      ...defaultTheme.screens,

    },
    
    extend: {
      fontFamily:{
        'pop': ["Poppins", 'sans-serif'],
        'mon': ['Montserat','sans-serif'],
        'kan': ['kanit','sans-serif'],
        'Anton':['Anton', 'sans-serif'],
        'Jos':['Josefin Sans', 'sans-serif'],
        'wal':['GT Walsheim Pro Bold Regular']
      },},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

