import { TextInput, Pressable, View, Text } from "react-native";
import { useState } from "react";
import { login, createAccount } from "../../Networking/APIRequests";

export default function UserForm({ setCurrentUser, navigation, endpoint }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleUsernameInput = (text) => {
    setUsernameInput(text);
  };

  const handlePasswordInput = (text) => {
    setPasswordInput(text);
  };

  const handleSubmitPress = async () => {
    const result =
      endpoint === "login"
        ? await login(usernameInput, passwordInput)
        : await createAccount(usernameInput, passwordInput);
    result ? setCurrentUser(usernameInput) : alert("Access Denied");
  };

  return (
    <View className="border-solid items-center m-2">
      <TextInput
        className="w-5/6 h-10 border-solid border border-slate m-2 p-2 bg-white"
        placeholder="Username"
        onChangeText={(text) => {
          handleUsernameInput(text);
        }}
      ></TextInput>
      <TextInput
        className="w-5/6 h-10 border-solid border border-slate m-2 p-2 bg-white"
        placeholder="Password"
        onChangeText={(text) => {
          handlePasswordInput(text);
        }}
      ></TextInput>
      <Pressable
        onPress={handleSubmitPress}
        className="h-12 w-1/2 p-4 m-2 bg-green"
      >
        <Text className="text-center text-white">Submit</Text>
      </Pressable>
    </View>
  );
}
