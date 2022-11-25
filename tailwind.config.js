/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'monoton': [`"Monoton"`, 'cursive'],
        'jua': [`Jua`, 'sans-serif']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      "bumblebee",
      "business"
    ],
    darkTheme: "business"
  }
}
