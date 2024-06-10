/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FFC0CB",
          light: "#FFD7E6",
          dark: "#FF6363",
        },
        secondary: {
          default: "#3c3b65",
          light: "#64548e",
          dark: "#000000",
        },
        terciary: {
          default: "#040350",
          light: "#273475",
          dark: "#E0E0E0",
        },
      },
      fontFamily: {
        body: ["lato"],
      },
    },
  },
  plugins: [],
};
