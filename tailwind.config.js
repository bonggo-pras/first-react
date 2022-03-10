const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          light: "#feca1d",
          DEFAULT: "#e1ad01",
          dark: "#b48a01"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};