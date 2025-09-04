/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px', // Menú móvil hasta 991px, desktop desde 992px
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
