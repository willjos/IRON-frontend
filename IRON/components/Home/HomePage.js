import { View, Text, Pressable } from "react-native";
import {
  getUserWorkouts,
  getUserExercises,
  getUserHistory,
  getUserPRs,
} from "../../Networking/APIRequests";

export default function HomePage({
  navigation,
  currentUser,
  setCurrentUser,
  setUserWorkoutData,
  setUserExerciseData,
  setUserHistory,
  setUserPRs,
}) {
  const handleStartSessionPress = async () => {
    const userWorkoutData = await getUserWorkouts(currentUser);
    setUserWorkoutData(userWorkoutData);
    navigation.navigate("Start Session");
  };

  const handleCreatePress = async () => {
    const userExerciseData = await getUserExercises(currentUser);
    setUserExerciseData(userExerciseData);
    navigation.navigate("Create");
  };

  const handleProgressTrackerPress = async () => {
    const userHistoryData = await getUserHistory(currentUser);
    const userPRData = await getUserPRs(currentUser);
    setUserHistory(userHistoryData);
    setUserPRs(userPRData);
    navigation.navigate("Progress Tracker");
  };

  const handleLogoutPress = () => {
    setCurrentUser("");
  };
  return (
    <View className="h-full w-full justify-center bg-white">
      <Text className="text-lg text-left mx-2 py-2">
        Welcome, {currentUser}
      </Text>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={handleStartSessionPress}
      >
        <Text className="text-white">Start Session</Text>
      </Pressable>
      <Pressable className="h-12 p-4 m-2 bg-green" onPress={handleCreatePress}>
        <Text className="text-white">Create</Text>
      </Pressable>
      <Pressable
        className="h-12 p-4 m-2 bg-green"
        onPress={handleProgressTrackerPress}
      >
        <Text className="text-white">Progress Tracker</Text>
      </Pressable>
      <Pressable className="h-12 p-4 m-2 bg-green" onPress={handleLogoutPress}>
        <Text className="text-white">Log Out</Text>
      </Pressable>
    </View>
  );
}
