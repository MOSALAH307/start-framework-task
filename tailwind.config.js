/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        teal: {
          500: "#1abc9c",
          600: "#2c3e50",
        },
        faded: {
          0: "#000000",
        },
      },
    },
  },
  plugins: [],
};
