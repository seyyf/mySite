/** @type {import('tailwindcss').Config} */
const color = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      color,
      darkColor: "#243C47",
      mainColor: "#FDC830",
    },
  },
  plugins: [],
};
