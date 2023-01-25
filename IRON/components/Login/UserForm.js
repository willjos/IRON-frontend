import { TextInput, Pressable, View, Text } from "react-native";

export default function LoginForm({ currentUser, navigation }) {
  const handleSubmitPress = () => {
    console.log("check user details");
    navigation.navigate("HomePage");
  };

  return (
    <View className="border-solid items-center m-2">
      <TextInput
        className="w-5/6 h-10 border-solid border border-slate m-2 p-2 bg-white"
        placeholder="Username"
      ></TextInput>
      <TextInput
        className="w-5/6 h-10 border-solid border border-slate m-2 p-2 bg-white"
        placeholder="Password"
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
