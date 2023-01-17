/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100% ": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
      },

      fontFamily: {
        cyber: "'Orbitron', sans-serif;",
      },

      boxShadow: {
        "neon-white": "0px 0px 20px  #fff",
      },

      borderColor: {
        "neon-white": "#fff",
      },

      colors: {
        neon: "ff2a6d",
      },
    },
  },
  plugins: [],
}
