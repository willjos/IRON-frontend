import { TextInput, Pressable, View, Text } from "react-native";

export default function LoginForm() {
  return (
    <View className="border-solid border border-slate-800 items-center m-2 p-2">
      <TextInput
        className="w-5/6 h-10 border-solid border border-slate-800 m-2 p-2"
        placeholder="Username"
      ></TextInput>
      <TextInput
        className="w-5/6 h-10 border-solid border border-slate-800 m-2 p-2"
        placeholder="Password"
      ></TextInput>
      <Pressable className="w-3/6 h-10 border-solid border border-slate-800 m-2 p-2.5">
        <Text className="text-center">Submit</Text>
      </Pressable>
    </View>
  );
}
