import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function WorkoutPage({
  navigation,
  userData,
  setUserData,
  ...item
}) {
  const { name, exercises } = item;
  const [workoutData, setWorkoutData] = useState({});

  const handleExercisePress = (exerciseName) => {
    navigation.navigate(exerciseName, { workoutData, setWorkoutData });
  };

  const handleDonePress = () => {
    navigation.navigate("Home Page");
  };

  return (
    <View>
      <Text>This is the workout page for {name}</Text>
      {exercises.map((exercise, index) => {
        return (
          <Pressable
            className="h-12 p-4 m-2 bg-green"
            key={index}
            onPress={() => handleExercisePress(exercise["name"])}
          >
            <Text className="text-center text-white">{exercise["name"]}</Text>
          </Pressable>
        );
      })}
      <Pressable
        className="w-1/4 h-12 m-2 p-4 bg-green"
        onPress={handleDonePress}
      >
        <Text className="text-white text-center">Done</Text>
      </Pressable>
    </View>
  );
}
