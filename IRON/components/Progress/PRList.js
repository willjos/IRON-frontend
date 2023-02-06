import { View, Text } from "react-native";

export default function PRList({ userPRs }) {
  return (
    <View>
      {userPRs.map((item) => (
        <Text>{item}</Text>
      ))}
    </View>
  );
}
