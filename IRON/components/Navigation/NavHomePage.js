import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Create from "../Home/Create";
import HomePage from "../Home/HomePage";
import ProgressTracker from "../Home/ProgressTracker";
import StartSession from "../Home/StartSession";
import WorkoutPage from "../Workout/WorkoutPage";
import ExercisePage from "../Workout/ExercisePage";
import History from "../Progress/History";
import Analytics from "../Progress/Analytics";
import PRList from "../Progress/PRList";

export default function NavHome({
  currentUser,
  setCurrentUser,
  userData,
  setUserData,
}) {
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
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Start Session">
          {(props) => (
            <StartSession
              {...props}
              userData={userData}
              currentUser={currentUser}
            />
          )}
        </Stack.Screen>
        {userData.workouts.map((item, index) => {
          return (
            <Stack.Screen name={item.name} key={index}>
              {(props) => (
                <WorkoutPage
                  {...props}
                  {...item}
                  userData={userData}
                  setUserData={setUserData}
                />
              )}
            </Stack.Screen>
          );
        })}
        {userData.workouts.map((item) => {
          return item.exercises.map((exercise) => {
            return (
              <Stack.Screen name={exercise["name"]}>
                {(props) => (
                  <ExercisePage
                    {...props}
                    {...exercise}
                    userData={userData}
                    setUserData={setUserData}
                  />
                )}
              </Stack.Screen>
            );
          });
        })}
        <Stack.Screen name="Create">
          {(props) => <Create {...props} userData={userData} />}
        </Stack.Screen>
        <Stack.Screen name="Progress Tracker">
          {(props) => <ProgressTracker {...props} />}
        </Stack.Screen>
        <Stack.Screen name="History">
          {(props) => <History {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Analytics">
          {(props) => <Analytics {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Personal Records">
          {(props) => <PRList {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
