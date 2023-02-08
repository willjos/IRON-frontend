import { Canvas, Path, Line, Skia, vec } from "@shopify/react-native-skia";
import { curveBasis, line, scaleLinear, scaleTime } from "d3";
import { View } from "react-native";

export default function VolumeProgressChart({ pressedExerciseData }) {
  const GRAPH_HEIGHT = 400;
  const GRAPH_WIDTH = 370;

  const makeGraph = () => {
    const min = Math.min(
      ...pressedExerciseData.map((point) => point["volume"])
    );
    const max = Math.max(
      ...pressedExerciseData.map((point) => point["volume"])
    );
    const getYAxis = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);
    const getXAxis = scaleTime()
      .domain([
        new Date(pressedExerciseData[0]["logged_at"]),
        new Date(
          pressedExerciseData[pressedExerciseData.length - 1]["logged_at"]
        ),
      ])
      .range([10, GRAPH_WIDTH - 10]);
    const curvedLine = line()
      .x((point) => getXAxis(new Date(point["logged_at"])))
      .y((point) => getYAxis(point["volume"]))
      .curve(curveBasis)(pressedExerciseData);
    const skPath = Skia.Path.MakeFromSVGString(curvedLine);
    return {
      min,
      max,
      curve: skPath,
    };
  };
  const graphData = makeGraph();
  return (
    <View>
      {graphData && (
        <Canvas
          style={{
            height: GRAPH_HEIGHT,
            width: GRAPH_WIDTH,
          }}
        >
          <Line
            strokeWidth={1}
            color="#353535"
            p1={vec(10, 130)}
            p2={vec(400, 130)}
          />
          <Line
            strokeWidth={1}
            color="#353535"
            p1={vec(10, 250)}
            p2={vec(400, 250)}
          />
          <Line
            strokeWidth={1}
            color="#353535"
            p1={vec(10, 370)}
            p2={vec(400, 370)}
          />
          <Path
            path={graphData.curve}
            color="#3C6E71"
            strokeWidth={3}
            style="stroke"
          />
        </Canvas>
      )}
    </View>
  );
}
