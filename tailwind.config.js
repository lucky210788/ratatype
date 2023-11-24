/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#0A335C',
        secondary: '#174258cc',
        formField: {
          background: '#EEF4F6',
          border: '#1742581a',
        },
        brand: {
          primary: '#00ACFF',
        },
        other: {
          yellow:{
            primary: '#FC0',
            light: '#FFEB99',
          },
          red:{
            primary: '#FF3B30',
          }
        }
      },
      fontFamily: {
        main: ['Manrope']
      },
    },
  },
  plugins: [],
}
