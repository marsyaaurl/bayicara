/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFFFE',
        primary: '#3EBDC6',
        secondary: '#1F758E',
        blueAccent: '#1095DC',
        black: '#000000',
        grey: '#7D7F7F',
      },
      borderRadius: {
        '4xl': '3.5rem'
      }
    },
  },
  plugins: [],
}