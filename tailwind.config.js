/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 0px 0px 2px rgb(216, 125, 74) ",
      },
    },
  },
  plugins: [require("daisyui")],
};
