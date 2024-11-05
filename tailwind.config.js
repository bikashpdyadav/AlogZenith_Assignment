/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-blue-100': '#A4E6FF',
        'light-blue-transparent': 'rgba(239, 245, 255, 0)',
        'custom-blue': '#172B4DD9',
      }
    },
  },
  plugins: [],
}

