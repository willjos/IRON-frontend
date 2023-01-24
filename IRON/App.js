import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/HomePage";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => <LoginPage {...props} currentUser={currentUser} />}
        </Stack.Screen>
        <Stack.Screen name="Home Page">
          {(props) => <HomePage {...props} currentUser={currentUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
