/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: "#3179FF",
        preto: "#151515",
        footer: "#101010",
        h1: "#CCCCCC",
        ptext: "#999999",
      },
    },
  },
  plugins: [],
};
