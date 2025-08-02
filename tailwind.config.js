/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#ffd500", // Yellow
        text: "#fefefe",    // White
        grit: "#1e1e1e",    // Dark gray noise
      },
      fontFamily: {
        funky: ['"Anton"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
