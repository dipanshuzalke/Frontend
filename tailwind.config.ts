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
      fontFamily1: {
        nunito: ['"Nunito"', 'sans-serif'],
        roboto: ["Roboto", 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

