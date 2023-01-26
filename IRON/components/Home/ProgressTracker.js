import { View, Text, Pressable } from "react-native";

export default function ProgressTracker({ navigation }) {
  return (
    <View>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={() => navigation.navigate("History")}
      >
        <Text className="text-white">History</Text>
      </Pressable>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={() => navigation.navigate("Analytics")}
      >
        <Text className="text-white">Analytics</Text>
      </Pressable>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={() => navigation.navigate("Personal Records")}
      >
        <Text className="text-white">PR List</Text>
      </Pressable>
    </View>
  );
}
