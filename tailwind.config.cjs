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
        secondary: ['Rubik'],
        mono: ['Source Code Pro'],
      },
      fontSize: {
        '7xl': '5rem',
        '4xl': '2.5rem',
      },
      screens: {
        'limit': '1536px',
        // 'xl': 'calc(1440px + 10rem)',
      }
    },
  },
  plugins: [],
};
