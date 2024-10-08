// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-gray": "#2a2829",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
