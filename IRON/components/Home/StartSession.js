import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { getUserWorkouts } from "../../Networking/APIRequests";

export default function StartSession({ userData, currentUser, navigation }) {
  const [workoutData, setWorkoutData] = useState({});
  const handleWorkoutPress = (name) => {
    navigation.navigate(name);
  };

  useEffect(() => {
    (async () => {
      const userWorkoutData = await getUserWorkouts(currentUser);
      setWorkoutData(userWorkoutData);
    })();
  }, []);

  return (
    <View>
      {workoutData.workouts &&
        workoutData.workouts.map((item, index) => {
          return (
            <Pressable
              className="h-12 p-4 m-2 bg-green"
              key={index}
              onPress={() => handleWorkoutPress(item["workout_name"])}
            >
              <Text className="text-white">{item["workout_name"]}</Text>
            </Pressable>
          );
        })}
    </View>
  );
}
