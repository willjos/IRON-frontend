import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Create from "../Home/Create";
import HomePage from "../Home/HomePage";
import ProgressTracker from "../Home/ProgressTracker";
import StartSession from "../Home/StartSession";
import WorkoutPage from "../Workout/WorkoutPage";
import ExercisePage from "../Workout/ExercisePage";
import History from "../Progress/History/History";
import Analytics from "../Progress/Analytics/Analytics";
import PRList from "../Progress/PRList";

export default function NavHome({ currentUser, setCurrentUser }) {
  const [userWorkoutData, setUserWorkoutData] = useState({ workouts: [] });
  const [userExerciseData, setUserExerciseData] = useState([]);
  const [userHistory, setUserHistory] = useState({});
  const [userPRs, setUserPRs] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#284B63",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Home Page">
          {(props) => (
            <HomePage
              {...props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              setUserWorkoutData={setUserWorkoutData}
              setUserExerciseData={setUserExerciseData}
              setUserHistory={setUserHistory}
              setUserPRs={setUserPRs}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Start Session">
          {(props) => (
            <StartSession
              {...props}
              userWorkoutData={userWorkoutData}
              currentUser={currentUser}
            />
          )}
        </Stack.Screen>
        {userWorkoutData.workouts.map((item, index) => {
          return (
            <Stack.Screen name={item["workout_name"]} key={index}>
              {(props) => (
                <WorkoutPage {...props} {...item} currentUser={currentUser} />
              )}
            </Stack.Screen>
          );
        })}
        {userWorkoutData.workouts.map((item) => {
          return item.exercises.map((exercise) => {
            return (
              <Stack.Screen
                name={`${item["workout_name"]}: ${exercise["exercise_name"]}`}
              >
                {(props) => <ExercisePage {...props} {...exercise} />}
              </Stack.Screen>
            );
          });
        })}
        <Stack.Screen name="Create">
          {(props) => (
            <Create
              {...props}
              userExerciseData={userExerciseData}
              currentUser={currentUser}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Progress Tracker">
          {(props) => <ProgressTracker {...props} />}
        </Stack.Screen>
        <Stack.Screen name="History">
          {(props) => <History {...props} userHistory={userHistory} />}
        </Stack.Screen>
        <Stack.Screen name="Analytics">
          {(props) => (
            <Analytics
              {...props}
              userHistory={userHistory}
              userExerciseData={userExerciseData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Personal Records">
          {(props) => <PRList {...props} userPRs={userPRs} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
// test
