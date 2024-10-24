/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily:{
      display: ['Open sans', 'sans-serif'],
      body: ['Open sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

