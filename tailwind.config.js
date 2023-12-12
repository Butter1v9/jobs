/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/hero-background.png')",
        "hero-blank": "url('./images/image.png')",
      },
      colors: {
        navy: "#414f6b",
      },
      fontFamily: {
        oswold: ["'Oswald', sans-serif"],
      },
    },
  },
  plugins: [],
};
