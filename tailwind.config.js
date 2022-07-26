/** @type {import('tailwindcss').Config} */
/* eslint-env es6 */
/* eslint-disable */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: {
        100: "rgba(0,0,0,0.1)",
        500: "rgba(29,29,29,0.5)",
        800: "rgb(29,29,29)",
        900: "rgb(0,0,0)",
      },
      white: {
        300: "rgba(255,255,255,0.3)",
        700: "rgba(255,255,255,0.7)",
        900: "rgb(255,255,255)",
      },
      primary: "rgba(100, 154, 210, 1)",
      background: "rgb(245,245,245)",
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        mobileH: "20px",
        desktopH: "calc(100vw/12)",
        mobilePadding: "40px",
        desktopPadding: "100px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
