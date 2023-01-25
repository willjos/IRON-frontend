/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./components/Login/LoginPage.js",
    "./components/Login/UserForm.js",
    "./components/HomePage.js",
  ],
  theme: {
    extend: {},
    colors: {
      slate: "#353535",
      green: "#3C6E71",
      white: "#ffffff",
      grey: "#D9D9D9",
      blue: "#284B63",
    },
  },
  plugins: [],
};
