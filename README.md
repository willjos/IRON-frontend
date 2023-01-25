# IRON-frontend

This is the frontend repo for the workout app project 'IRON'. This will contain code for a React Native app that runs on Expo on iOS.

## Aims

The primary aim of this project is to build on the knowledge I have gained from the AR Business Cards group project from the last two weeks of the Sigma Labs course, and try to complete a slightly more ambitious independent project, with more complex frontend navigation and cleaner, more organised code (an emphasis on componentisation).

## Outcomes

A functioning workout logger app that is a slightly simplified version of HeavySet - the workout logger that I currently use from the App Store.

## User Stories

1. Users can register an account and then login using their (securely stored) credentials.
2. Users can start a workout, choosing from existing workouts they have created or do a custom workout.
3. Users can tap on an exercise in their workout, and log weight and reps for each set.
4. Users can create a new workout, adding exercises from a list of exercises they have created (with the option of adding a new exercise to existing ones if the searched one is not found).
5. Users can access a progress tracker which will show them their full workout history.
6. Users can access a progress tracker which will show them analytics of their workout data.
7. Users can access a progress tracker which will show them a PR list, containing all current PRs for exercises.

8. Developers are able to run tests for all code written to ensure new features don't break existing ones.

## Running the project

Users must currently own the Expo Go iOS app.
Run the following command in the Expo project directory (IRON):

```
npx expo start
```

Upon opening the Expo Go iOS app, there should be the option to open the running Expo project.
