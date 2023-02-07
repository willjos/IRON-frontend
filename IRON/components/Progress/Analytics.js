import { useEffect, useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";

export default function Analytics({ userHistory, userExerciseData }) {
  const [pressedExercise, setPressedExercise] = useState("");
  const [pressedExerciseData, setPressedExerciseData] = useState([]);
  const userLogs = Object.keys(userHistory)
    .map((key) => userHistory[key])
    .flat();
  userLogs.forEach((set) => (set["volume"] = set["weight"] * set["reps"]));
  // Each object in userLogs has a logged_at and volume property, these will be the data points for the graph

  const handleExercisePress = (exerciseName) => {
    setPressedExercise(exerciseName);
  };

  useEffect(() => {
    const newPressedExerciseData = userLogs.filter(
      (log) => log["exercise_name"] === pressedExercise
    );
    setPressedExerciseData(newPressedExerciseData);
    console.log(newPressedExerciseData);
  }, [pressedExercise]);

  return (
    <View>
      <View>
        <Text>GRAPH FROM pressedExerciseData</Text>
      </View>
      <ScrollView>
        {userExerciseData.map((exercise, index) => (
          <Pressable
            key={index}
            className="h-12 p-4 m-2 bg-green"
            onPress={() => {
              handleExercisePress(exercise["exercise_name"]);
            }}
          >
            <Text className="text-white">{exercise["exercise_name"]}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
