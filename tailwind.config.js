/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": "5rem",
      },
      colors: {
        background: " rgba(var(--background)) ",
        text: " rgba(var(--text)) ",
        purple: " rgba(var(--purple)) ",
        btntext: " rgba(var(--btntext)) ",
        navbackground: " rgba(var(--navbackground)) ",
        purple: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba( 237, 88, 22 ,0.4) 2px, #1E1E22 5px, #1E1E22 100px);",
      },
    },
  },
  plugins: [],
};
