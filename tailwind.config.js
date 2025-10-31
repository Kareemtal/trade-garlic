/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bull-green': '#10b981',
        'bear-red': '#ef4444',
      },
      fontFamily: {
        'brand': ['Montserrat', 'sans-serif'],
        'display': ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [],
}
