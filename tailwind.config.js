/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: "'Orbitron', sans-serif;",
      },

      colors: {
        neon: "ff2a6d",
      },
    },
  },
  plugins: [],
}
