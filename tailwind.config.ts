import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "gentle-spin": {
          "0%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "gentle-spin": "gentle-spin 3s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
