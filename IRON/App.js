import { useEffect, useState } from "react";
import NavLogin from "./components/Navigation/NavLogin";
import NavHome from "./components/Navigation/NavHomePage";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [userData, setUserData] = useState({
    workouts: [
      {
        name: "Push",
        exercises: [
          {
            name: "bench",
            workouts: [
              {
                date: "some date",
                sets: [
                  { weight: 70, reps: 8 },
                  { weight: 75, reps: 9 },
                ],
              },
              {
                date: "some other date",
                sets: [
                  { weight: 80, reps: 10 },
                  { weight: 85, reps: 11 },
                ],
              },
            ],
          },
          { name: "tricep extension" },
          { name: "dip" },
        ],
      },
      {
        name: "Pull",
        exercises: [
          { name: "row" },
          { name: "pull-up" },
          { name: "face pull" },
        ],
      },
      {
        name: "Legs",
        exercises: [
          { name: "squat" },
          { name: "RDL" },
          { name: "machine calf raise" },
        ],
      },
    ],
  });

  useEffect(() => {
    // response = await fetch("fetch user data from API");
    // responseJSON = await response.json();
    // setUserData(responseJSON);
    console.log("useEffect Triggered");
  }, [currentUser]);

  return (
    <>
      {currentUser ? (
        <NavHome
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          userData={userData}
          setUserData={setUserData}
        />
      ) : (
        <NavLogin setCurrentUser={setCurrentUser} />
      )}
    </>
  );
}
