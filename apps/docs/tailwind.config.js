/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@arkejs/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@arkejs/ui/plugin")],
  arkeUI: {
    theme: {
      colors: {
        background: {
          400: "#111218",
          DEFAULT: "#0B0C11",
        },
        neutral: {
          DEFAULT: "#8f8f8f",
        },
      },
    },
  },
};
