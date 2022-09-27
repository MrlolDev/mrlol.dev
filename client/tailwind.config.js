/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        gray: {
          900: "#111111",
          800: "#141414",
          700: "#202020",
          600: "#353535",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
    typography: (theme) => ({
      dark: {
        css: {
          color: "white",
        },
      },
    }),
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
