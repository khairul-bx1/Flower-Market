// tailwind.config.js
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Serif"', 'serif'], // ✅ font-noto class
      },
    },
  },
  plugins: [],
};
