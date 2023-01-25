import { View, Text } from "react-native";

export default function SetLog({ setNumber, ...setData }) {
  const { weight, reps } = setData;
  return (
    <View className="m-2 p-2">
      <Text className="text-lg text-slate">
        Set {setNumber}: {weight} kg x {reps} reps
      </Text>
    </View>
  );
}
