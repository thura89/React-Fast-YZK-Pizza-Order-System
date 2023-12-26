/** @type {import('tailwindcss').Config} */
// eslint-disabled-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto mono,monospace",
    },
    extend: {
      colors: {
        pizza: "#232343",
      },
    },
  },
  plugins: [],
};
