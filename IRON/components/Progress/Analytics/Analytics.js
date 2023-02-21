import { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import VolumeProgressChart from "./VolumeProgressChart";

export default function Analytics({ userHistory, userExerciseData }) {
  const [pressedExercise, setPressedExercise] = useState("");
  const userLogs = Object.keys(userHistory)
    .map((key) => userHistory[key])
    .flat();
  userLogs.forEach((set) => (set["volume"] = set["weight"] * set["reps"]));
  const pressedExerciseData = userLogs.filter(
    (log) => log["exercise_name"] === pressedExercise
  );
  const handleExercisePress = (exerciseName) => {
    setPressedExercise(exerciseName);
  };

  return (
    <ScrollView>
      <View>
        <Text className="font-semibold text-2xl text-center m-4">
          {pressedExercise ? pressedExercise : "Select an exercise"}
        </Text>
        {pressedExercise && pressedExerciseData.length ? (
          <VolumeProgressChart pressedExerciseData={pressedExerciseData} />
        ) : (
          <Text className="font-semibold text-2xl text-center m-4">
            No Data
          </Text>
        )}
      </View>
      <View>
        {userExerciseData &&
          userExerciseData.map((exercise, index) => (
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
      </View>
    </ScrollView>
  );
}
