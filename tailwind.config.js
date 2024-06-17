/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "paper-circle-gradient":
          "radial-gradient(circle, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "rock-circle-gradient":
          "radial-gradient(circle, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        "scissors-circle-gradient":
          "radial-gradient(circle, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "custom-bg":
          "radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        "winner-bg":
          "radial-gradient(circle, rgba(0, 0, 0, 0) 40%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0.3) 100%)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
