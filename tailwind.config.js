/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Sarabun: ["Sarabun", "sans-serif"],
      Merriweather: ["Merriweather", "serif"],
      Tommorow: ["Tommorow", "sans-serif"],
    },
    keyframes: {
      kedapKedip: {
        "0%": { backgroundColor: "#FFFFFF", transform: "scale(1)" },
        "100%": { backgroundColor: "#FFB800", transform: "scale(1.1)" },
      },
    },
    animation: {
      kedapKedip: "kedapKedip 0.4s linear infinite alternate",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
