import { useState } from "react";
import { View, Pressable, Text, TextInput } from "react-native";
import UserForm from "./UserForm";

export default function Login() {
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
    <View className="h-full w-full justify-center">
      {loginRender ? (
        <Pressable className="text-center" onPress={handleLoginPress}>
          <Text className="text-center">Log In</Text>
        </Pressable>
      ) : (
        <View>
          <Text className="text-center">Log in here:</Text>
          <UserForm />
        </View>
      )}
      {createAccountRender ? (
        <Pressable onPress={handleCreateAccountPress}>
          <Text className="text-center">Create Account</Text>
        </Pressable>
      ) : (
        <View>
          <Text className="text-center">No account? Register with us:</Text>
          <UserForm />
        </View>
      )}
    </View>
  );
}
