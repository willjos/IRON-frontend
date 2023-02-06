import { useState } from "react";
import { ScrollView, View, Pressable, Text } from "react-native";

export default function HistoryTile({ workoutData }) {
  const [pressed, setPressed] = useState(false);
  const handleTilePress = () => {
    setPressed(!pressed);
  };

  return (
    <ScrollView>
      <Pressable className="h-12 p-4 m-2 bg-green" onPress={handleTilePress}>
        <Text className="text-white">
          {workoutData[0]["workout_name"]} : {workoutData[0]["logged_at"]}
        </Text>
      </Pressable>
      {pressed && (
        <View>
          {workoutData.map((item, index) => {
            return (
              <View key={index} className="border-2 border-slate p-4 m-2">
                <Text>
                  {item["exercise_name"]}: {item["weight"]} kg x {item["reps"]}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}
