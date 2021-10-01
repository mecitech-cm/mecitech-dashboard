const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.vue', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#e67814',
      secondary: '#000080',
      dark: '#232931',
      grey: '#999999',
      ...colors,
    },
    fontFamily: {
      sans: ['', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  // plugins: [require('@tailwindcss/forms')],
  plugins: [],
};
