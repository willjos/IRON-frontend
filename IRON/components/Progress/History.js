import { View, Text, Pressable } from "react-native";

export default function History({ userHistory }) {
  return (
    <ScrollView>
      {userHistory &&
        Object.keys(userHistory).map((workout_log_id, index) => {
          return (
            <Pressable key={index} className="h-12 p-4 m-2 bg-green">
              <Text className="text-white">
                {userHistory[workout_log_id][0]["workout_name"] +
                  ": " +
                  userHistory[workout_log_id][0]["logged_at"]}
              </Text>
            </Pressable>
          );
        })}
    </ScrollView>
  );
}
