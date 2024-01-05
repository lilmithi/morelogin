/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#5b7cfd",
        darkBlue: "#37476A",
        fadedBlue: "#8CA4FC",
        primaryGray: "#B7CAE2",
        bodyGray: "#e7eef8",
        primaryOrange: "#FFC040",
      },
    },
  },
  plugins: [],
};
