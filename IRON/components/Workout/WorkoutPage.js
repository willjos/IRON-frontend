import { View, Text } from "react-native";

export default function WorkoutPage({ ...item }) {
  const { name } = item;
  return (
    <View>
      <Text>This is the workout page for {name}</Text>
    </View>
  );
}
