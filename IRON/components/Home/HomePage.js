import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function HomePage({ navigation, currentUser, setCurrentUser }) {
  const handleLogoutPress = () => {
    setCurrentUser("");
  };

  return (
    <View className="h-full w-full justify-center bg-white">
      <Text className="text-lg text-left mx-2 py-2">
        Welcome, {currentUser}
      </Text>
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
        onPress={() => navigation.navigate("Progress Tracker")}
      >
        <Text className="text-white">Progress Tracker</Text>
      </Pressable>
      <Pressable className="h-12 p-4 m-2 bg-green" onPress={handleLogoutPress}>
        <Text className="text-white">Log Out</Text>
      </Pressable>
    </View>
  );
}
