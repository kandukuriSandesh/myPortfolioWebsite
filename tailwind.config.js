const tailwindConfig = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'slash-bp':'640px',
         'below380': {'max':'380px'},
         'above770':'770px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;