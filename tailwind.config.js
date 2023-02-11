/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#0A0A0A",
        primary: "#661AE6",
        secondary: "#D926AA",
        accent: "#1FB2A5",
        neutral: "#191D24",
        "base-100": "#2A303C",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
        peach: "#F5F5F5",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        cursive: ["Cedarville Cursive", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
