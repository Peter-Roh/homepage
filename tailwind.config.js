/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['"Lobster"', "cursive"],
        newsreader: ['"Newsreader"', "serif"],
      },
      animation: {
        "custom-bounce": "custom-bounce 1s infinite",
      },
      keyframes: {
        "custom-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(25%)",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  plugins: [],
};
