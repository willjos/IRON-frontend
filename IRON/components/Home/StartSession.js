import { View, Text, Pressable } from "react-native";

export default function StartSession({ userData, navigation }) {
  const handleWorkoutPress = (name) => {
    navigation.navigate(name);
  };

  return (
    <View>
      {userData.workouts.map((item, index) => {
        return (
          <Pressable
            className="h-12 p-4 m-2 bg-green"
            key={index}
            onPress={() => handleWorkoutPress(item.name)}
          >
            <Text className="text-white">{item.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
