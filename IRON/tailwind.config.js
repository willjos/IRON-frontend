/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./components/Login/LoginPage.js",
    "./components/Login/UserForm.js",
    "./components/Home/HomePage.js",
    "./components/Home/StartSession.js",
    "./components/Home/Create.js",
    "./components/Home/Analytics.js",
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
