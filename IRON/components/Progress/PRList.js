import { ScrollView, View, Text } from "react-native";

export default function PRList({ userPRs }) {
  return (
    <ScrollView>
      {Object.keys(userPRs).map((item, index) => (
        <View key={index} className="p-4 m-2 bg-green">
          <Text className="text-white font-semibold py-1">{item}</Text>
          <Text className="text-white py-0.5">
            {userPRs[item]["weight"]} kg x {userPRs[item]["reps"]}
          </Text>
          <Text className="text-white">{userPRs[item]["logged_at"]}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
