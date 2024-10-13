/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Merriweather: ["Merriweather", "serif"],
      Tommorow: ["Tommorow", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
