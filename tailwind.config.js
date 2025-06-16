/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#6366f1', // Indigo
        },
        secondary: {
          600: '#8b5cf6', // Purple
        },
      },
    },
  },
  plugins: [],
} 