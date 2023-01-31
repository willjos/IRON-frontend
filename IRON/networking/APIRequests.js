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
