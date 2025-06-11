import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#EAEAEF",
              100: "#D5D5DF",
              200: "#ABABBF",
              300: "#81819F",
              400: "#57577F",
              500: "#333450", // Main brand color
              600: "#292A40",
              700: "#1F2030",
              800: "#151520",
              900: "#0A0A10",
              DEFAULT: "#333450",
              foreground: "#FFFFFF"
            }
          }
        }
      }
    })
  ]
}
