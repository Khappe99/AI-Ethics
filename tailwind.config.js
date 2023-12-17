/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "992px",
      md: "1400px",
    },
    extend: {
      screens: {
        sm: "600px",
        md: "960px",
      },
    },
  },
  plugins: [],
};
