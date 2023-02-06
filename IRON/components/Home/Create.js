import { useState } from "react";
import { Text, TextInput, Pressable, ScrollView, Alert } from "react-native";
import SearchExercise from "../Create/SearchExercise";
import { addUserWorkout } from "../../Networking/APIRequests";

export default function Create({ navigation, userExerciseData, currentUser }) {
  const [workoutName, setWorkoutName] = useState("");
  const [workoutExercises, setWorkoutExercises] = useState([]);
  const [addExercisePressed, setAddExercisePressed] = useState(false);

  const handleWorkoutNameInput = (text) => {
    setWorkoutName(text);
  };

  const handleAddExercisePress = () => {
    setAddExercisePressed(true);
  };

  const handleDonePress = async () => {
    Alert.alert("Add this workout?", "", [
      {
        text: "Yes",
        onPress: async () => {
          const res = await addUserWorkout(
            currentUser,
            workoutName,
            workoutExercises
          );
          if (res) {
            alert("Workout Added");
            navigation.goBack();
          } else {
            alert("Failed to Add Workout");
          }
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("No Pressed");
        },
      },
    ]);
    // const res = await addUserWorkout(
    //   currentUser,
    //   workoutName,
    //   workoutExercises
    // );
    // if (res) {
    //   alert("Workout Added");
    //   navigation.goBack();
    // } else {
    //   alert("Failed to Add Workout");
    // }
  };

  return (
    <ScrollView>
      <TextInput
        className="h-12 border-solid border border-slate m-2 p-4 bg-white"
        placeholder="Enter Workout Name"
        onChangeText={handleWorkoutNameInput}
      />
      {!addExercisePressed ? (
        <Pressable
          className="w-1/2 h-12 m-2 p-4 bg-green"
          onPress={handleAddExercisePress}
        >
          <Text className="text-white text-center">Add Exercise</Text>
        </Pressable>
      ) : (
        <SearchExercise
          workoutExercises={workoutExercises}
          userExerciseData={userExerciseData}
          setWorkoutExercises={setWorkoutExercises}
        />
      )}
      <Pressable
        className="w-1/4 h-12 m-2 p-4 bg-green"
        onPress={handleDonePress}
      >
        <Text className="text-white text-center">Done</Text>
      </Pressable>
    </ScrollView>
  );
}
