/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  // purge: ["./src/**/**/*.mdx", "./blog/*.mdx"],
  theme: {
    extend: {},
  },
  plugins: [],
}

