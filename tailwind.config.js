const colors = require("tailwindcss/colors");
const replaceFractionDivider = require("./tailwind/replace-fraction-divider");
const decorationColorPlugin = require("./tailwind/decoration-color-plugin");

const config = {
  separator: "_",
  purge: {
    options: {
      safelist: [
        /tw-gap/,
        /tw-col-span/,
        /tw-col-start/,
        /tw-grid-cols/,
        /tw-(pt|pb)/,
        /tw-bg-blend/,
        /tw-(bg|border)-(primary|secondary|gray|white|black)/,
        /tw-order-[1-6]/,
      ],
    },
  },
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
      primary: ["Raleway", '"Helvetica"', '"Arial"', "sans-serif"],
      secondary: ['"Helvetica"', '"Arial"', "sans-serif"],
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      primary: {
        light: colors.red["300"],
        DEFAULT: colors.red["500"],
        dark: colors.red["700"],
      },
      secondary: {
        light: colors.indigo["300"],
        DEFAULT: colors.indigo["500"],
        dark: colors.indigo["700"],
      },
      gray: {
        lighter: "#f6fafa",
        light: colors.gray["300"],
        DEFAULT: colors.gray["500"],
        dark: colors.gray["700"],
      },
      success: {
        light: colors.emerald["300"],
        DEFAULT: colors.emerald["500"],
        dark: colors.emerald["700"],
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
        DEFAULT: "#3e97b9", // colors.blue['500'],
        dark: "#015378", // colors.blue['700'],
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
