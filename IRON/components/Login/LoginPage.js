import { useState } from "react";
import { View, Pressable, Text, TextInput } from "react-native";
import UserForm from "./UserForm";

export default function Login({ currentUser, navigation }) {
  const [loginRender, setLoginRender] = useState(true);
  const [loginUsernameInput, setloginUsernameInput] = useState("");
  const [loginPasswordInput, setloginPasswordInput] = useState("");
  const [createAccountRender, setCreateAccountRender] = useState(true);
  const [createAccountUsernameInput, setCreateAccountUsernameInput] =
    useState("");
  const [createAccountPasswordInput, setCreateAccountPasswordInput] =
    useState("");

  const handleLoginPress = () => {
    setLoginRender(false);
    setCreateAccountRender(true);
  };

  const handleCreateAccountPress = () => {
    setCreateAccountRender(false);
    setLoginRender(true);
  };

  const handleSubmitPress = () => {
    console.log("send API request");
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
          <UserForm currentUser={currentUser} navigation={navigation} />
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
          <UserForm currentUser={currentUser} navigation={navigation} />
        </View>
      )}
    </View>
  );
}
