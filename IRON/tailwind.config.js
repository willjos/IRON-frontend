/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./components/Login/LoginPage.js",
    "./components/Login/UserForm.js",
    "./components/Home/HomePage.js",
    "./components/Home/ProgressTracker.js",
    "./components/Home/StartSession.js",
    "./components/Home/Create.js",
    "./components/Navigation/NavHomePage.js",
    "./components/Navigation/NavLogin.js",
    "./components/Workout/WorkoutPage.js",
    "./components/Workout/SetLog.js",
    "./components/Workout/ExercisePage.js",
    "./components/Create/SearchExercise.js",
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
