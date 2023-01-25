import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";
import StartSession from "./components/Home/StartSession";
import Create from "./components/Home/Create";
import Analytics from "./components/Home/Analytics";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <>
      {currentUser ? (
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
              {(props) => <StartSession {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Create">
              {(props) => <Create {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Analytics">
              {(props) => <Analytics {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <LoginStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#284B63",
              },
              headerTintColor: "#fff",
            }}
          >
            <LoginStack.Screen name="Welcome to IRON">
              {(props) => (
                <LoginPage {...props} setCurrentUser={setCurrentUser} />
              )}
            </LoginStack.Screen>
          </LoginStack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
