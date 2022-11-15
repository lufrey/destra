/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#12191EDB',
        accent: '#6388B2',
        accentHover: '#4773a6',
        bright: '#F6F6F6',
      },
      fontFamily: {
        sans: ['Rubik'],
      },
    },
  },
  plugins: [],
};
