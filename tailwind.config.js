import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ⚫ Background e base
        dark: "#0f0f0f",
        black: "#000000",
        light: "#ffffff",

        // 🟣 Palette primaria
        primary: {
          DEFAULT: "#7c3aed",     // viola
          dark: "#5b21b6",        // hover
          light: "#c4b5fd",       // bg chiari
        },

        // 💜 Accenti secondari (fucsia/rosa)
        accent: {
          DEFAULT: "#e879f9",
          dark: "#be34d1",
          light: "#f5d0fe",
        },

        // ⚪ Testi e neutri
        muted: {
          light: "#f4f4f5",
          dark: "#3f3f46",
        },

        // 🧊 Grigi neutri
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), require("@tailwindcss/typography")],
}
