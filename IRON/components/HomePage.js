import { View, Text, Pressable } from "react-native";

export default function HomePage() {
  return (
    <View>
      <Pressable className="h-12 p-4 m-2 bg-green">
        <Text className="text-center  text-white">Start Session</Text>
      </Pressable>
      <Pressable className="h-12 p-4 m-2 bg-green">
        <Text className="text-center  text-white">Create</Text>
      </Pressable>
      <Pressable className="h-12 p-4 m-2 bg-green">
        <Text className="text-center  text-white">Analytics</Text>
      </Pressable>
    </View>
  );
}
