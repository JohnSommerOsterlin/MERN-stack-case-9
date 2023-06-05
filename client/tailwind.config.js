/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'topShadow': '0 -2px 10px 0px rgba(0,0,0,0.26)'
      }
    },
  },
  plugins: [],
}