/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pharosGold: "#FFD700", // example Pharos gold
        nigeriaGreen: "#008751", // Nigeria green
        nigeriaWhite: "#FFFFFF"
      },
    },
  },
  plugins: [],
}
