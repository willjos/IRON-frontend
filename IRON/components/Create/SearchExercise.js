import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { useState } from "react";

export default function SearchExercise({
  workoutExercises,
  setWorkoutExercises,
  userExerciseData,
}) {
  const [exerciseInput, setExerciseInput] = useState("");

  const handleExerciseInput = (text) => {
    setExerciseInput(text);
  };

  const handleAddExercise = (exerciseName) => {
    const newWorkoutExercises = [...workoutExercises, exerciseName];
    if (!workoutExercises.includes(exerciseName)) {
      setWorkoutExercises(newWorkoutExercises);
    } else {
      alert(`${exerciseName} is already in this workout.`);
    }
  };

  return (
    <ScrollView>
      {workoutExercises &&
        workoutExercises.map((exercise, index) => {
          return (
            <View className="m-1 p-1" key={index}>
              <Text className="text-lg text-slate">
                Exercise {index + 1}: {exercise}
              </Text>
            </View>
          );
        })}
      <TextInput
        className="h-12 border-solid border border-slate m-2 p-4 bg-white"
        placeholder="Search for an Exercise"
        onChangeText={handleExerciseInput}
      />
      {exerciseInput && (
        <Pressable
          className="h-12 p-4 m-2 bg-green"
          onPress={() => handleAddExercise(exerciseInput)}
        >
          <Text className="text-center text-white">{exerciseInput}</Text>
        </Pressable>
      )}
      {userExerciseData &&
        exerciseInput &&
        userExerciseData.map((exercise, index) => {
          return (
            <View key={index}>
              {exercise["exercise_name"].includes(exerciseInput) &&
                exercise["exercise_name"] !== exerciseInput && (
                  <Pressable
                    className="h-12 p-4 m-2 bg-green"
                    onPress={() => handleAddExercise(exercise["exercise_name"])}
                  >
                    <Text className="text-center text-white">
                      {exercise["exercise_name"]}
                    </Text>
                  </Pressable>
                )}
            </View>
          );
        })}
    </ScrollView>
  );
}
