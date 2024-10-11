/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
      'bebas': ['Bebas Neue', 'cursive'],
      'playwrite': ['"Playwrite DE Grund"', 'cursive'],  
      'playfair': ['Playfair Display', 'serif'], // For Playfair Display
      'sixtyfour': ['"Sixtyfour Convergence"', 'sans-serif'],
        'qwitcher':["Qwitcher Grypen", 'cursive'],
       'pacifico': ["Pacifico", 'cursive'],

      }
    },
  },
  plugins: [],
}