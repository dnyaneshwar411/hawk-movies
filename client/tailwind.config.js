/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    scrollSnapType: {
      'proximity': "proximity"
    },
    extend: {},
  },
  plugins: [],
}