import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../Login/LoginPage";

export default function NavLogin({ setCurrentUser }) {
  return (
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
          {(props) => <LoginPage {...props} setCurrentUser={setCurrentUser} />}
        </LoginStack.Screen>
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

const LoginStack = createNativeStackNavigator();
