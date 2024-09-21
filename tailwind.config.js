/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        teal: {
          500: "#1abc9c",
        },
      },
    },
  },
  plugins: [],
};

