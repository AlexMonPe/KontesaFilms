const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "375px",
      ...defaultTheme.screens,
    },
  },
  extend: {},
  plugins: [],
  // purge: {
  //   enable: true,
  //   content: ["./src/**/*.html"]
  // }
}