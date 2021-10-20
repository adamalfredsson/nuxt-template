const colors = require("tailwindcss/colors");
const replaceFractionDivider = require("./tailwind/replace-fraction-divider");
const decorationColorPlugin = require("./tailwind/decoration-color-plugin");

const config = {
  separator: "_",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "size-inherit": "inherit",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "8rem",
      },
    },
    fontFamily: {
      primary: ["'Raleway'", "'Helvetica'", "'Arial'", "sans-serif"],
      secondary: ["'Fredoka One'", "'Helvetica'", "'Arial'", "sans-serif"],
    },
    fontSize: {
      sm: ["1rem", "1.6"],
      base: ["1.25rem", "1.6"],
      lg: ["1.625rem", "1.6"],
      xl: ["2rem", "1.6"],
      "2xl": ["2.5rem", "1.6"],
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      primary: {
        light: colors.sky["300"],
        DEFAULT: colors.sky["500"],
        dark: colors.sky["700"],
      },
      secondary: {
        light: colors.indigo["300"],
        DEFAULT: colors.indigo["500"],
        dark: colors.indigo["700"],
      },
      success: {
        light: colors.emerald["300"],
        DEFAULT: colors.emerald["500"],
        dark: colors.emerald["700"],
      },
      grayish: {
        lighter: colors.blueGray["100"],
        light: colors.blueGray["300"],
        DEFAULT: colors.blueGray["500"],
        dark: colors.blueGray["700"],
      },
      warning: {
        light: colors.yellow["300"],
        DEFAULT: colors.yellow["500"],
        dark: colors.yellow["700"],
      },
      danger: {
        light: colors.red["300"],
        DEFAULT: colors.red["500"],
        dark: colors.red["700"],
      },
      info: {
        light: colors.blue["300"],
        DEFAULT: colors.blue["500"],
        dark: colors.blue["700"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [decorationColorPlugin],
};

module.exports = replaceFractionDivider("_", config, [
  "width",
  "translate",
  "inset",
  "padding",
  "margin",
]);
