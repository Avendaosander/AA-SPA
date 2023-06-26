/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'laila': ['Laila', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'HOME': "url('./assets/Home.jpg')"
      }
    },
  },
  plugins: [
    scrollbarPlugin({ nocompatible: true })
  ],
}

