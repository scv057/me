/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
import {
  genThemeExtend,
  genCssVariable,
} from "@andrew_xie/tailwind-dark-theme";

const tokens = {
  "light-font-color": "black",
  "light-background-color": "white",
  "light-shine-color": "black",
  "light-shine-color-rgb": "0, 0, 0",
  "light-lamp-color": "black",
  "light-link-color": "#4e1e86",
  "light-primary-color": "#bd93f9",
  "light-secondary-color": "#9547b7",
  "light-background-color-1": "white",
  "light-background-color-2": "#bd93f917",
  "dark-font-color": "white",
  "dark-background-color": "#0e0027",
  "dark-shine-color": "#5fb0f7",
  "dark-shine-color-rgb": "95, 176, 247",
  "dark-lamp-color": "white",
  "dark-link-color": "#7651ff",
  "dark-primary-color": "#bd93f9",
  "dark-secondary-color": "#9547b7",
  "dark-background-color-1": "white",
  "dark-background-color-2": "#bd93f917",
};
const cssVariable = genCssVariable(tokens);
const themeExtend = genThemeExtend(tokens);

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        pink: {
          css: {
            "--tw-prose-body": theme("colors.pink[800]"),
            "--tw-prose-headings": theme("colors.pink[900]"),
            "--tw-prose-lead": theme("colors.pink[700]"),
            "--tw-prose-links": theme("colors.pink[900]"),
            "--tw-prose-bold": theme("colors.pink[900]"),
            "--tw-prose-counters": theme("colors.pink[600]"),
            "--tw-prose-bullets": theme("colors.pink[400]"),
            "--tw-prose-hr": theme("colors.pink[300]"),
            "--tw-prose-quotes": theme("colors.pink[900]"),
            "--tw-prose-quote-borders": theme("colors.pink[300]"),
            "--tw-prose-captions": theme("colors.pink[700]"),
            "--tw-prose-code": theme("colors.pink[900]"),
            "--tw-prose-pre-code": theme("colors.pink[100]"),
            "--tw-prose-pre-bg": theme("colors.pink[900]"),
            "--tw-prose-th-borders": theme("colors.pink[300]"),
            "--tw-prose-td-borders": theme("colors.pink[200]"),
            "--tw-prose-invert-body": theme("colors.pink[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.pink[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.pink[400]"),
            "--tw-prose-invert-bullets": theme("colors.pink[600]"),
            "--tw-prose-invert-hr": theme("colors.pink[700]"),
            "--tw-prose-invert-quotes": theme("colors.pink[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.pink[700]"),
            "--tw-prose-invert-captions": theme("colors.pink[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.pink[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.pink[600]"),
            "--tw-prose-invert-td-borders": theme("colors.pink[700]"),
          },
        },
      }),
    },
  },
  // tailwind has removed some default style see @link https://tailwindcss.com/docs/preflight
  // using typography plugin to fix it @link
  // https://tailwindcss.com/docs/typography-plugin
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(cssVariable);
    }, themeExtend),
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        // use predetermined delimiter in arbitrary values then split the
        // value to receive 2 or more values
        "half-shadow": (value) => {
          return {
            "box-shadow": `${value} var(--primary-color)`,
          };
        },
      });
    }),
  ],
};
