import { useState } from "react";
import NavLogin from "./components/Navigation/NavLogin";
import NavHome from "./components/Navigation/NavHomePage";

export default function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <>
      {currentUser ? (
        <NavHome currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <NavLogin setCurrentUser={setCurrentUser} />
      )}
    </>
  );
}
