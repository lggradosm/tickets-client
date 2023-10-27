/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#182434',
        'accent': "#cba557"
      },
      colors: {
        'accent': "#cba557"

      }
    },
  },
  plugins: [],
}