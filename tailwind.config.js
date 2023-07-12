/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        P_Color_Lime_Green: "hsl(163, 72%, 41%)",
        P_Color_Bright_Red: "hsl(356, 69%, 56%)",
      },
    },
  },
  plugins: [],
};

