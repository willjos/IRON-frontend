import { ScrollView } from "react-native";
import HistoryTile from "./HistoryTile";

export default function History({ userHistory }) {
  return (
    <ScrollView>
      {userHistory &&
        Object.keys(userHistory).map((workout_log_id, index) => {
          return (
            <HistoryTile
              key={index}
              workoutData={userHistory[workout_log_id]}
            />
          );
        })}
    </ScrollView>
  );
}
