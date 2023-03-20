/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        animatesvg: {
          '0%' : {
            'stroke-dashoffset': '2275.874755859375px',
            'stroke-dasharray': '2275.874755859375px',
            'fill': 'transparent',
          },
          '100%' : {
            'stroke-dashoffset': '0',
            'fill': 'rgba(0, 0, 0,0.3)',
          }
        },
      },
      backgroundImage: {
        'clouds': "url(/public/clouds.svg)",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
