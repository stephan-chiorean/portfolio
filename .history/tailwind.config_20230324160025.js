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
      },
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
        technology: {
          DEFAULT: "#02a9f7",
          primary: "#d4f0fc",
          secondary: "#89d6fb",
          dark: "#02577a",
          xdark: "#01303f",
        }
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
