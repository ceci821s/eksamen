/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "background-color": "#f5c330",
      /* PRIMÆRE */

      sol: "#f5c330",
      rust: "#d2682c",
      himmel: "#cdeff6",
      regnorm: "#d5bba4",
      graes: "#656a41",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
