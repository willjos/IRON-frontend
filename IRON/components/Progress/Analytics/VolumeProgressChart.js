import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useState } from "react";

export default function VolumeProgressChart({ pressedExerciseData }) {
  const [currentGraphPoint, setCurrentGraphPoint] = useState({});
  const GRAPH_HEIGHT = 350;
  const GRAPH_WIDTH = 380;
  const labels = pressedExerciseData.map((log) => log["logged_at"]);
  const data = pressedExerciseData.map((log) => log["volume"]);

  const handleDataPointClick = (value, index) => {
    const newGraphPoint = { date: labels[index], value };
    setCurrentGraphPoint(newGraphPoint);
  };

  return (
    <View>
      {pressedExerciseData && (
        <View>
          {currentGraphPoint.value && (
            <View>
              <Text className="text-center">
                Volume: {currentGraphPoint.value} kg
              </Text>
              <Text className="text-center p-2">
                Logged at: {currentGraphPoint.date}
              </Text>
            </View>
          )}
          <LineChart
            data={{
              labels: labels,
              datasets: [{ data }],
            }}
            width={GRAPH_WIDTH}
            height={GRAPH_HEIGHT}
            fromZero={true}
            formatXLabel={() => ""}
            chartConfig={{
              backgroundGradientFrom: "#3C6E71",
              backgroundGradientTo: "#284B63",
              decimalPlaces: 0,
              color: () => "#ffffff",
              labelColor: () => "#ffffff",
              propsForDots: {
                r: "4",
                strokeWidth: "1",
                stroke: "#353535",
              },
            }}
            onDataPointClick={({ value, index }) =>
              handleDataPointClick(value, index)
            }
            bezier
          />
        </View>
      )}
    </View>
  );
}
