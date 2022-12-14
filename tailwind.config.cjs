/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
    
      /* PRIMARY */

      "sol": "#f5c330",
      "rust": "#d2682c",
      "himmel": "#cdeff6",
      "regnorm": "#d5bba4",
      "graes": "#656a41",



      /* COLORS */
  /* rust */
  "rust-100": "#f9eed7",
  "rust-200": "#f4d7b0",
  "rust-300": "e8b886",
  "rust-400": "#d89966",
  "rust-500": "#c36e3b",
  "rust-600": "#a7522d",
  "rust-700": "#8c3b21",
  "rust-800": "#6f2717",
  "rust-900": "#5c1a0f",

  /* himmel */

  "himmel-100": "#f7fefd",
  "himmel-200": "#f0fefd",
  "himmel-300": "#e7fafc",
  "himmel-400": "#dff5f8",
  "himmel-500": "#d4eef5",
  "himmel-600": "#9fc3d1",
  "himmel-700": "#7298ae",
  "himmel-800": "#4c6e8b",
  "himmel-900": "#314f73",

  /* graes */

  "graes-100": "#f6f7e6",
  "graes-200": "#edf0ce",
  "graes-300": "#ced2a6",
  "graes-400": "#a0a57a",
  "graes-500": "#666a46",
  "graes-600": "#565b35",
  "graes-700": "#464c26",
  "graes-800": "#373d1a",
  "graes-900": "#2d3212",

  /* sol */

  "sol-100": "#fdf8d9",
  "sol-200": #fbf0b4;
  --sol-300: #f8e48f;
  --sol-400: #f3d774;
  --sol-500: #edc551;
  --sol-600: #caa340;
  --sol-700: #a98332;
  --sol-800: #886524;
  --sol-900: #6f501b;

  /* regnorm */

  --regnorm-100: #fcf9f2;
  --regnorm-200: #f9f2e5;
  --regnorm-300: #f0e4d2;
  --regnorm-400: #e2d3c0;
  --regnorm-500: #d1bca7;
  --regnorm-600: #b2937b;
  --regnorm-700: #926e56;
  --regnorm-800: #744c38;
  --regnorm-900: #5f3423;

  /* COLOR | ALIAS */

  /* BACKGROUNDS */

  --background-color: #fffdf9;
  --banner-background: #282828;
  --footer-background1: #484848;
  --footer-background2: #323232;

  /* HEADINGS */

  --color-headings: #000000;
  --color-landingpage-headings: var(--sol-300);
  --color-abonnement-headings: var(--sol-500);
  --color-blomster-headings: var(--himmel-500);
  --color-banner-heading: var(--sol-300);

    },
    
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

