export default async function login(username, password) {
    res = await fetch("http://localhost:5000/login",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username, password}),
      })
    return res.ok
}

export default async function createAccount(username, password) {
    res = await fetch("http://localhost:5000/create-account",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username, password}),
      })
    return res.ok
}