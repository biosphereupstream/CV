import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2942",
          dark: "#081827",
          light: "#183D5F",
          50: "#F0F5FA",
          100: "#D9E5F2",
          900: "#0F2942",
        },
        azure: {
          DEFAULT: "#0284C7",
          light: "#38BDF8",
          dark: "#0369A1",
        },
        roast: {
          DEFAULT: "#D97706",
          dark: "#92400E",
          light: "#F59E0B",
          cream: "#FEF3C7",
        },
        surface: {
          light: "#F8FAFC",
          card: "#FFFFFF",
          muted: "#F1F5F9",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "'SF Mono'",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Liberation Mono'",
          "'Courier New'",
          "monospace",
        ],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(15, 41, 66, 0.08)",
        "luxury-hover": "0 20px 40px -12px rgba(15, 41, 66, 0.15)",
        "card-subtle": "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
