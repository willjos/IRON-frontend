import { useEffect, useState } from "react";
import NavLogin from "./components/Navigation/NavLogin";
import NavHome from "./components/Navigation/NavHomePage";
import { getUserExercises, getUserWorkouts } from "./Networking/APIRequests";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [userWorkoutData, setUserWorkoutData] = useState({});
  const [userExerciseData, setUserExerciseData] = useState([]);

  useEffect(() => {
    (async () => {
      const userWorkoutData = await getUserWorkouts(currentUser);
      const userExerciseData = await getUserExercises(currentUser);
      setUserWorkoutData(userWorkoutData);
      setUserExerciseData(userExerciseData);
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
        />
      ) : (
        <NavLogin setCurrentUser={setCurrentUser} />
      )}
    </>
  );
}
