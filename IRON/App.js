import { useEffect, useState } from "react";
import NavLogin from "./components/Navigation/NavLogin";
import NavHome from "./components/Navigation/NavHomePage";
import {
  getUserExercises,
  getUserHistory,
  getUserWorkouts,
  getUserPRs,
} from "./Networking/APIRequests";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [userWorkoutData, setUserWorkoutData] = useState({});
  const [userExerciseData, setUserExerciseData] = useState([]);
  const [userHistory, setUserHistory] = useState({});
  const [userPRs, setUserPRs] = useState({});

  useEffect(() => {
    (async () => {
      const userWorkoutData = await getUserWorkouts(currentUser);
      const userExerciseData = await getUserExercises(currentUser);
      const userHistory = await getUserHistory(currentUser);
      const userPRs = await getUserPRs(currentUser);
      setUserWorkoutData(userWorkoutData);
      setUserExerciseData(userExerciseData);
      setUserHistory(userHistory);
      setUserPRs(userPRs);
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
          userPRs={userPRs}
        />
      ) : (
        <NavLogin setCurrentUser={setCurrentUser} />
      )}
    </>
  );
}
