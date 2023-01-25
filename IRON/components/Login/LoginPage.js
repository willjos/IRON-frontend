import { useState } from "react";
import { View, Pressable, Text } from "react-native";
import UserForm from "./UserForm";

export default function LoginPage({ setCurrentUser, navigation }) {
  const [loginRender, setLoginRender] = useState(true);
  const [createAccountRender, setCreateAccountRender] = useState(true);

  const handleLoginPress = () => {
    setLoginRender(false);
    setCreateAccountRender(true);
  };

  const handleCreateAccountPress = () => {
    setCreateAccountRender(false);
    setLoginRender(true);
  };

  return (
    <View className="h-full w-full justify-center bg-white">
      {loginRender ? (
        <Pressable className="h-12 p-4 m-2 bg-green" onPress={handleLoginPress}>
          <Text className="text-center  text-white">Log In</Text>
        </Pressable>
      ) : (
        <View>
          <Text className="text-center">Log in here:</Text>
          <UserForm setCurrentUser={setCurrentUser} navigation={navigation} />
        </View>
      )}
      {createAccountRender ? (
        <Pressable
          className="h-12 p-4 m-2 bg-green"
          onPress={handleCreateAccountPress}
        >
          <Text className="text-center text-white">Create Account</Text>
        </Pressable>
      ) : (
        <View>
          <Text className="text-center">No account? Register with us:</Text>
          <UserForm setCurrentUser={setCurrentUser} navigation={navigation} />
        </View>
      )}
    </View>
  );
}
