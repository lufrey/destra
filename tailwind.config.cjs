/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        accent: '#C2FA45',
        bright: '#F2F2F2',
        dark: '#303539',
        black: '#121212',
        white: '#fff',
      },
      fontFamily: {
        sans: ['Orbitron'],
        mono: ['Source Code Pro'],
      },
    },
  },
  plugins: [],
};
