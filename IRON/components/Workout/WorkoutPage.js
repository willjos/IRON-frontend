import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { LogBox } from "react-native";
import { logUserWorkout } from "../../Networking/APIRequests";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function WorkoutPage({ navigation, currentUser, ...item }) {
  const { workout_name, exercises } = item;
  const [workoutLogData, setWorkoutLogData] = useState({
    workout_name,
    exercises,
  });

  const handleExercisePress = (exerciseName) => {
    navigation.navigate(exerciseName, { workoutLogData, setWorkoutLogData });
  };

  const handleDonePress = async () => {
    const res = await logUserWorkout(currentUser, workoutLogData);
    if (res) {
      alert("Workout Logged");
      navigation.navigate("Home Page");
    } else {
      alert("Failed to Log Workout");
    }
  };

  return (
    <View>
      <Text>This is the workout page for {workout_name}</Text>
      {exercises.map((exercise, index) => {
        return (
          <Pressable
            className="h-12 p-4 m-2 bg-green"
            key={index}
            onPress={() =>
              handleExercisePress(
                `${exercise["workout_name"]}: ${exercise["exercise_name"]}`
              )
            }
          >
            <Text className="text-center text-white">
              {exercise["exercise_name"]}
            </Text>
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
