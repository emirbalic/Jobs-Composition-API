/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-grey-1": "#dadce0",
        "brand-grey-2": "#f8f9fa",
        "brand-grey-3": "#80868b",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        grey: "0 1px 3px 0 rgba(60, 64, 67, .3)",
      }
    },
  },
  variants: {
    extend:{
      margin: ["first"],
    },
  },
  plugins: [],
};
