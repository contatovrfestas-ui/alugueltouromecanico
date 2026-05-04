/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rodeio: {
          terra: '#B5231D',
          'terra-dark': '#8C1B17',
          'terra-light': '#D14941',
          couro: '#5C3A21',
          'couro-dark': '#3E2715',
          'couro-light': '#7A4F2E',
          creme: '#F5E6D3',
          'creme-dark': '#E8D2B3',
          areia: '#F9F2E7',
          dourado: '#D9A441',
          'dourado-dark': '#B5882F',
          preto: '#1A1A1A',
          'cinza-rustico': '#3D3D3D',
        },
      },
      fontFamily: {
        title: ['Rye', 'Stardos Stencil', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
      backgroundImage: {
        'rodeio-pattern': "url('/images/bg-pattern.svg')",
      },
    },
  },
  plugins: [],
};
