/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#5b7cfd",
        fadedBlue: "#8CA4FC",
        primaryGray: "#B7CAE2",
        primaryOrange: "#FFC040",
      },
    },
  },
  plugins: [],
};
