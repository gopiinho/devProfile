/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "390px",
        // => @media (min-width: 360px) { ... }

        sm2: "550px",
        // => @media (min-width: 550px) { ... }

        md: "720px",
        // => @media (min-width: 720px) { ... }

        lg: "1080px",
        // => @media (min-width: 1080px) { ... }

        xl: "1440px",
        // => @media (min-width: 1440px) { ... }
      },

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
      letterSpacing: {
        widest: ".1em",
        titleWide: ".3em",
        titleDefault: ".28em",
      },

      fontFamily: {
        cyber: "'Orbitron', sans-serif;",
        rale: "'Raleway', sans-serif;",
        electro: "'Electrolize', sans-serif;",
      },

      boxShadow: {
        "neon-white": "0px 0px 20px  #fff",
        "neon-yellow": "0px 0px 20px #f0db4f",
        "neon-blue": "0px 0px 20px #61d9fb",
        "neon-tailwind": "0px 0px 20px #37bcf8",
        "neon-sol": "0px 0px 20px #63698E",
        "neon-green": "0px 0px 20px #3E863E",
        "neon-type": "0px 0px 20px #007ACC",
        "neon-main": "0px 0px 20px #ff2a6d",
      },

      borderColor: {
        "neon-white": "#fff",
        "neon-yellow": "#f0db4f",
        "neon-blue": "#61d9fb",
        "neon-tailwind": "#37bcf8",
        "neon-sol": "#63698E",
        "neon-green": "#3E863E",
        "neon-type": "#007ACC",
        "neon-main": "#ff2a6d",
      },

      colors: {
        neon: "ff2a6d",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
