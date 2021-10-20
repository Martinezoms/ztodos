module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greeny: '#004643',
        lgreeny: '#abd1c6',
        ashy: '#e8e4e6',
        mygold: '#f9bc60',
        blacky: '#001e1d',
        whitey: '#fffffe',
        bluey: '#6246ea'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
