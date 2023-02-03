import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SetLog from "./SetLog";

export default function ExercisePage({ navigation, route, ...exercise }) {
  const { exercise_name } = exercise;
  const { workoutLogData, setWorkoutLogData } = route.params;
  const [weightInput, setWeightInput] = useState("");
  const [repInput, setRepInput] = useState("");
  const [exerciseLogData, setExerciseLogData] = useState([]);

  const handleWeightChange = (weight) => {
    setWeightInput(weight);
  };

  const handleRepChange = (reps) => {
    setRepInput(reps);
  };

  const handleAddPress = () => {
    const newExerciseLogData = [
      ...exerciseLogData,
      { weight: weightInput, reps: repInput },
    ];
    setExerciseLogData(newExerciseLogData);
  };

  const handleDonePress = () => {
    const newWorkoutLogData = { ...workoutLogData };
    const exerciseIndex = newWorkoutLogData["exercises"].findIndex(
      (exercise) => exercise["exercise_name"] === exercise_name
    );
    newWorkoutLogData["exercises"][exerciseIndex].sets = exerciseLogData;
    setWorkoutLogData(newWorkoutLogData);
    navigation.goBack();
  };

  return (
    <View className="justify-center items-center">
      {exerciseLogData &&
        exerciseLogData.map((setData, index) => {
          return <SetLog {...setData} key={index} setNumber={index + 1} />;
        })}
      <View className="flex-row justify-center my-3">
        <TextInput
          className="w-2/6 h-12 border-solid border border-slate m-2 p-4 bg-white"
          placeholder="Weight (kg)"
          keyboardType="numeric"
          onChangeText={(text) => handleWeightChange(text)}
        />
        <TextInput
          className="w-2/6 h-12 border-solid border border-slate m-2 p-4 bg-white"
          placeholder="Reps"
          keyboardType="numeric"
          onChangeText={(text) => handleRepChange(text)}
        />
        <Pressable
          className="w-1/6 h-12 m-2 p-4 bg-green"
          onPress={handleAddPress}
        >
          <Text className="text-white text-center">Add</Text>
        </Pressable>
      </View>
      <Pressable
        className="w-1/4 h-12 m-2 p-4 bg-green"
        onPress={handleDonePress}
      >
        <Text className="text-white text-center">Done</Text>
      </Pressable>
    </View>
  );
}
