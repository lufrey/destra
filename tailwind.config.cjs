/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C3234',
        accent: '#6388B2',
        accentHover: '#4773a6',
        bright: '#F6F6F6',
        dark: '#2B2B2B',
      },
      fontFamily: {
        sans: ['Rubik'],
      },
    },
  },
  plugins: [],
};
