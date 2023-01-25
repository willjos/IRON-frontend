import { View, Text, Pressable } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={() => navigation.navigate("Start Session")}
      >
        <Text className="text-white">Start Session</Text>
      </Pressable>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={() => navigation.navigate("Create")}
      >
        <Text className="text-white">Create</Text>
      </Pressable>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={() => navigation.navigate("Analytics")}
      >
        <Text className="text-white">Analytics</Text>
      </Pressable>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={() => navigation.navigate("Welcome to IRON")}
      >
        <Text className="text-white">Log Out</Text>
      </Pressable>
    </View>
  );
}
