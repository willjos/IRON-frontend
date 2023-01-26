import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SetLog from "./SetLog";

export default function ExercisePage({
  navigation,
  userData,
  setUserData,
  workoutData,
  setWorkoutData,
  ...exercise
}) {
  const { name } = exercise;
  const [weightInput, setWeightInput] = useState("");
  const [repInput, setRepInput] = useState("");
  const [exerciseData, setExerciseData] = useState([]);

  const handleWeightChange = (weight) => {
    setWeightInput(weight);
  };

  const handleRepChange = (reps) => {
    setRepInput(reps);
  };

  const handleAddPress = () => {
    const newExerciseData = [
      ...exerciseData,
      { weight: weightInput, reps: repInput },
    ];
    setExerciseData(newExerciseData);
  };

  const handleDonePress = () => {
    const newWorkoutData = { ...workoutData };
    if (workoutData) {
      exerciseIndex = newWorkoutData.exercises.findIndex(
        (exercise) => exercise.name === name
      );
      console.log(workoutData);
    } else {
      console.log("none", workoutData);
    }
    navigation.goBack();
  };

  return (
    <View className="justify-center items-center">
      {exerciseData &&
        exerciseData.map((setData, index) => {
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
