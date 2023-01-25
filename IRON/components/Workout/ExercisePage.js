import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import SetLog from "./SetLog";

export default function ExercisePage({ ...exercise }) {
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

  return (
    <View>
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
          <Text className="text-white">Add</Text>
        </Pressable>
      </View>
    </View>
  );
}
