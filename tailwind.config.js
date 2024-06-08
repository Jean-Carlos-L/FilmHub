/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FFC0CB",
          light: "#FFA8A8",
          dark: "#FF6363",
        },
        secondary: {
          default: "#2e1964",
          light: "#888883",
          dark: "#000000",
        },
        terciary: {
          default: "#040350",
          light: "#FFFFFF",
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
