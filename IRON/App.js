import { useEffect, useState } from "react";
import NavLogin from "./components/Navigation/NavLogin";
import NavHome from "./components/Navigation/NavHomePage";
import { getUserWorkouts } from "./Networking/APIRequests";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [userWorkoutData, setUserWorkoutData] = useState({});

  useEffect(() => {
    (async () => {
      const userWorkoutData = await getUserWorkouts(currentUser);
      setUserWorkoutData(userWorkoutData);
    })();
  }, [currentUser]);

  return (
    <>
      {currentUser ? (
        <NavHome
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          userWorkoutData={userWorkoutData}
        />
      ) : (
        <NavLogin setCurrentUser={setCurrentUser} />
      )}
    </>
  );
}
