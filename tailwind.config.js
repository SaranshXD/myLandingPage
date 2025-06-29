/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {
    colors: {
      primary: "#1959AC",
      secondary: "#0546D2",
      text: "#222222",
    },
      transitionProperty: {
        'height': 'height',
      },
    fontFamily: {
      heading: "var(--font-roboto)",
      subheading: "var(--font-inter)",
      robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
    },
  },
},
  plugins: [],
}