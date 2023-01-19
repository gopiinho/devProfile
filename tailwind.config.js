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
        robot: "'Roboto', sans-serif;",
      },

      boxShadow: {
        "neon-white": "0px 0px 20px  #fff",
        "neon-yellow": "0px 0px 20px #f0db4f",
        "neon-blue": "0px 0px 20px #61d9fb",
        "neon-tailwind": "0px 0px 20px #37bcf8",
        "neon-sol": "0px 0px 20px #63698E",
        "neon-green": "0px 0px 20px #3E863E",
        "neon-type": "0px 0px 20px #007ACC",
      },

      borderColor: {
        "neon-white": "#fff",
        "neon-yellow": "#f0db4f",
        "neon-blue": "#61d9fb",
        "neon-tailwind": "#37bcf8",
        "neon-sol": "#63698E",
        "neon-green": "#3E863E",
        "neon-type": "#007ACC",
      },

      colors: {
        neon: "ff2a6d",
      },
    },
  },
  plugins: [],
}
