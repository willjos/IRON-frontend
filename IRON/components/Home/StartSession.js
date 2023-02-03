import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { getUserWorkouts } from "../../Networking/APIRequests";

export default function StartSession({ userWorkoutData, navigation }) {
  const handleWorkoutPress = (name) => {
    navigation.navigate(name);
  };

  return (
    <View>
      {userWorkoutData.workouts &&
        userWorkoutData.workouts.map((item, index) => {
          return (
            <Pressable
              className="h-12 p-4 m-2 bg-green"
              key={index}
              onPress={() => handleWorkoutPress(item["workout_name"])}
            >
              <Text className="text-white">{item["workout_name"]}</Text>
            </Pressable>
          );
        })}
    </View>
  );
}
