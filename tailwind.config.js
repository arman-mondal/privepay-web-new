const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          'dark-blue': 'hsl(233, 26%, 24%)',
          'lime-green': 'hsl(136, 65%, 51%)',
          'bright-cyan': 'hsl(192, 70%, 51%)',
        },
        neutral: {
          'grayish-blue': 'hsl(233, 8%, 62%)',
          'light-grayish-blue': 'hsl(220, 16%, 96%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};