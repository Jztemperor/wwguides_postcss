/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        navDark: "hsl(240, 4%, 11%)",
        primaryText: "hsl(32, 100%, 55%)",
        secondaryText: "hsl(0, 0%, 90%)",
        spellGreen: "hsl(155, 100%, 50%)",
        bgBlack: "hsl(0, 2%, 16%)",
        contentBg: "hsl(240, 4%, 11%)",
      },
    },
  },
  plugins: [],
};
