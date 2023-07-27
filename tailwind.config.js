/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  // purge: ["./src/**/**/*.mdx", "./blog/*.mdx"],
  theme: {
    extend: {
      typography: ({theme}) => ({
        gray: {
          css: {
            '--tw-prose-body': theme('colors.Gray[800]'),
            '--tw-prose-headings': theme('colors.Gray[900]'),
            '--tw-prose-lead': theme('colors.Gray[700]'),
            '--tw-prose-links': theme('colors.Gray[900]'),
            '--tw-prose-bold': theme('colors.Gray[900]'),
            '--tw-prose-counters': theme('colors.Gray[600]'),
            '--tw-prose-bullets': theme('colors.Gray[400]'),
            '--tw-prose-hr': theme('colors.Gray[300]'),
            '--tw-prose-quotes': theme('colors.Gray[900]'),
            '--tw-prose-quote-borders': theme('colors.Gray[300]'),
            '--tw-prose-captions': theme('colors.Gray[700]'),
            '--tw-prose-code': theme('colors.Gray[900]'),
            '--tw-prose-pre-code': theme('colors.Gray[100]'),
            '--tw-prose-pre-bg': theme('colors.Gray[900]'),
            '--tw-prose-th-borders': theme('colors.Gray[300]'),
            '--tw-prose-td-borders': theme('colors.Gray[200]'),
            '--tw-prose-invert-body': theme('colors.Gray[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.Gray[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.Gray[400]'),
            '--tw-prose-invert-bullets': theme('colors.Gray[600]'),
            '--tw-prose-invert-hr': theme('colors.Gray[700]'),
            '--tw-prose-invert-quotes': theme('colors.Gray[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.Gray[700]'),
            '--tw-prose-invert-captions': theme('colors.Gray[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.Gray[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.Gray[600]'),
            '--tw-prose-invert-td-borders': theme('colors.Gray[700]'),
          },
        },
      }),
    },
  },
  corePlugins: {
    // preflight: false
  },
  // tailwind has removed some default style see @link https://tailwindcss.com/docs/preflight
  // using typography plugin to fixit @link https://tailwindcss.com/docs/typography-plugin
  plugins: [require("@tailwindcss/typography")],
};

