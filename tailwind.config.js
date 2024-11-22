/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#DAC5A7",
        darkGray: "#1A1A1A",
      },
    },
    animation: {
      glitch: "glitch 1s infinite",
    },
    keyframes: {
      glitch: {
        "0%, 100%": { textShadow: "2px 2px #ff00ff, -2px -2px #00ffff" },
        "50%": { textShadow: "-2px -2px #ff00ff, 2px 2px #00ffff" },
      },
    },
  },
  plugins: [],
};
