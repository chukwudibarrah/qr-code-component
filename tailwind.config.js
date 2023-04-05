/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        "light-gray": '#D6E2F0',
        "grayish-blue": '#7B879D',
        "dark-blue": '#1F3251',
      },
    },
  },
  plugins: [],
};
