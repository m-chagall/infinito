/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      flex: {
        "2": "2 2 0%",
      },
      width: {
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "128": "32rem",
        "160": "40rem",
        "inherit": "inherit",
      },
      minWidth: {
        "32": "8rem",
        "72": "18rem",
        "96": "14rem",
        "128": "32rem",
        "160": "40rem",
      },
      maxWidth: {
        "128": "32rem",
        "160": "40rem",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      spacing: {
        "128": "32rem",
        "192": "48rem",
        "3/5": "60%",
      },
      transitionDelay: {
        "50": "50ms",
      },
      padding: {
        "auto": "auto",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
      darkMode: ["class", '[data-mode="dark"]'],
    },
  },
  plugins: [],
};
