/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HOME': "url('./assets/Home.jpg')"
      }
    },
  },
  plugins: [
    require ( 'tailwind-scrollbar' ) ( {  nocompatible : true  } )
  ],
}

