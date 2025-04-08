/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-desktop': "url('/images/bg-desktop-dark.jpg')",
        "light-desktop": "url('/images/bg-desktop-light.jpg')",
        "dark-mobile": "url('/images/bg-mobile-dark.jpg')",
        "light-mobile": "url('/images/bg-mobile-light.jpg')",
      },

      colors: {
        'CheckBackground': 'linear-gradient(hsl(192, 100%, 67%) to hsl(280, 87%, 65%))',
        // Light theme
        'BrightBlue': 'hsl(220, 98%, 61%)',
        'VeryLightGray': 'hsl(0, 0%, 98%)',
        'VeryLightGrayishBlue': 'hsl(236, 33%, 92%)',
        'LightGrayishBlue': 'hsl(233, 11%, 84%)',
        'DarkGrayishBlue': 'hsl(236, 9%, 61%)',
        'VeryDarkGrayishBlue': 'hsl(235, 19%, 35%)',
        // Dark theme
        'VeryDarkBlue': 'hsl(235, 21%, 11%)',
        'VeryDarkDesaturatedBlue': 'hsl(235, 24%, 19%)',
        'LightGrayishBlue2': 'hsl(234, 39%, 85%)',
        'LightGrayishBlue(hover)': 'hsl(236, 33%, 92%)',
        'DarkGrayishBlue2': 'hsl(234, 11%, 52%)'
      }
    },
  },
  plugins: [],
}

