import { useEffect, useState } from "react";
import NavLogin from "./components/Navigation/NavLogin";
import NavHome from "./components/Navigation/NavHomePage";
import {
  getUserExercises,
  getUserHistory,
  getUserWorkouts,
} from "./Networking/APIRequests";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [userWorkoutData, setUserWorkoutData] = useState({});
  const [userExerciseData, setUserExerciseData] = useState([]);
  const [userHistory, setUserHistory] = useState({});

  useEffect(() => {
    (async () => {
      const userWorkoutData = await getUserWorkouts(currentUser);
      const userExerciseData = await getUserExercises(currentUser);
      const userHistory = await getUserHistory(currentUser);
      setUserWorkoutData(userWorkoutData);
      setUserExerciseData(userExerciseData);
      setUserHistory(userHistory);
    })();
  }, [currentUser]);

  return (
    <>
      {currentUser ? (
        <NavHome
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          userWorkoutData={userWorkoutData}
          userExerciseData={userExerciseData}
          userHistory={userHistory}
        />
      ) : (
        <NavLogin setCurrentUser={setCurrentUser} />
      )}
    </>
  );
}
