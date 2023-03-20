/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clouds': "url(/public/clouds.svg)",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
