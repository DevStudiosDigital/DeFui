/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        conveyor: "conveyor 10s linear infinite",
      },
      keyframes: {
        conveyor: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      fontFamily: {
        rakitek: ["rakitekFont", "sans-serif"],
        racing: ["racing", "sans-serif"],
        RacingSansOne: ["RacingSansOne", "inter"],
      },
      colors: {
        "accent-color": "#F6019D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
