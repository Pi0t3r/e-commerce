/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainImage: "url(./images/main-image.jpg)",
      },
    },
  },
  plugins: [],
};
