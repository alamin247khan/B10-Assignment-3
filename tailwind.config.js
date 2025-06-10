/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./index.html"],
    theme: {
      extend: {
        fontFamily: {
          manrope: ['Manrope', 'sans-serif'],
        },
        colors: {
          clifford: "#da373d",
          "bike-primary": "#E76F51",
          "hero-background": "#E76F511A",
        },
      },
    },
    plugins: [
      // require('daisyui'), // Uncomment if using DaisyUI locally
    ],
  }