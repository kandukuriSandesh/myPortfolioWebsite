const tailwindConfig = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'slash-bp':'640px',
         'below380': {'max':'380px'},
         'above770':'770px',
         '1124':'1124px',
         'after500':'500px',
         'after400':'400px',
         'after300':'300px',
         'after200':'200px',
         'after50':'50px',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;