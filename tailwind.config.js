/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        alt: ['var(--font-plus_Jakarta)'],
      },
      colors: {
       blues: {
        50: "#f0f8ff",
        100: "#007eff",
        200: "#1c3c50",
       },
       gray: {
        50: "#eaeaea",
        100: "#bebebf",
        200: "#9e9ea0",
        300: "#727275",
        400: "#56565a",
        500: "#2c2c31",
        600: "#28282d",
        700: "#1f1f23",
        800: "#18181b",
        900: "#121215",
      },
      },
    },
  },
  plugins: [],
}
