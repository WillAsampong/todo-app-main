/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgDesktop': "url('/images/bg-desktop-dark.jpg')",

      },
      colors: {
        CheckBackground: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
        // Light theme
        BrightBlue: 'hsl(220, 98%, 61%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        DarkGrayishBlue: 'hsl(236, 9%, 61%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        // Dark theme
        VeryDarkBlue: 'hsl(235, 21%, 11%)',
        VeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        LightGrayishBlue2: 'hsl(234, 39%, 85%)',
        'LightGrayishBlue(hover)': 'hsl(236, 33%, 92%)',
        DarkGrayishBlue2: 'hsl(234, 11%, 52%)'
      }
    },
  },
  plugins: [],
}

