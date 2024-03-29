export async function login(username, password) {
  const res = await fetch("https://iron-backend.herokuapp.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.ok;
}

export async function createAccount(username, password) {
  const res = await fetch("https://iron-backend.herokuapp.com/create-account", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.ok;
}

export async function getUserWorkouts(username) {
  const res = await fetch(
    `https://iron-backend.herokuapp.com/get-workouts?username=${username}`
  );
  const resJSON = await res.json();
  return resJSON;
}

export async function logUserWorkout(username, data) {
  const res = await fetch("https://iron-backend.herokuapp.com/log-workout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, workout_data: data }),
  });
  return res.ok;
}

export async function getUserExercises(username) {
  const res = await fetch(
    `https://iron-backend.herokuapp.com/get-exercises?username=${username}`
  );
  const resJSON = await res.json();
  return resJSON;
}

export async function addUserWorkout(username, workout_name, exercises) {
  const res = await fetch("https://iron-backend.herokuapp.com/add-workout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, workout_name, exercises }),
  });
  return res.ok;
}

export async function getUserHistory(username) {
  const res = await fetch(
    `https://iron-backend.herokuapp.com/get-history?username=${username}`
  );
  const resJSON = await res.json();
  return resJSON;
}

export async function getUserPRs(username) {
  const res = await fetch(
    `https://iron-backend.herokuapp.com/get-prs?username=${username}`
  );
  const resJSON = await res.json();
  return resJSON;
}
