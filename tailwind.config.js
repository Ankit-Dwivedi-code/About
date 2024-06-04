const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors:{
        'cyan': colors.cyan,
        'teal' : colors.teal
      }
    },
  },
  plugins: [],
}

