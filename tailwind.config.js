/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '8xl': '8rem', // Define custom size
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

