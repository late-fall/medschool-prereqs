/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}",
    "./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        navy5 : "#0D1B2A",
        navy4 : "#1B263B",
        navy3 : "#415A77",
        navy2 : "#778DA9",
        navy1 : "#E0E1DD"
      }
    },
    fontFamily: {
      'kor' : ['Noto Sans KR']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

