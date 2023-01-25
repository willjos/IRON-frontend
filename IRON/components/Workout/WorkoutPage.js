import { View, Text, Pressable } from "react-native";

export default function WorkoutPage({ navigation, ...item }) {
  const { name, exercises } = item;

  const handleExercisePress = (exerciseName) => {
    navigation.navigate(exerciseName);
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
    </View>
  );
}
