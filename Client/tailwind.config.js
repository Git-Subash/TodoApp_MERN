/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import withMT from "@material-tailwind/react/utils/withMT"

module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],

});

