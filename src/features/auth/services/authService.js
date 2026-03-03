const USERS_KEY = "users";
const HISTORY_KEY = "loginHistory";

/* =========================
   Get User Public IP
========================= */
const getUserIP = async () => {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
  } catch (error) {
    return "Unknown IP";
  }
};

/* =========================
   LocalStorage Helpers
========================= */
const getUsers = () =>
  JSON.parse(localStorage.getItem(USERS_KEY)) || [];

const saveUsers = (users) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

const getHistory = () =>
  JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];

const saveHistory = (history) =>
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));

/* =========================
   Register User
========================= */
export const registerUser = (data) => {
  const users = getUsers();

  const exists = users.find((u) => u.email === data.email);
  if (exists) {
    throw new Error("User already exists");
  }

  users.push(data);
  saveUsers(users);

  return data;
};

/* =========================
   Login User
========================= */
export const loginUser = async ({ email, password }) => {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const history = getHistory();
  const ip = await getUserIP();

  const entry = {
    email,
    ipAddress: ip,
    loginTime: new Date().toISOString(), // Better than toLocaleString()
  };

  history.push(entry);
  saveHistory(history);

  // ✅ Return only this user's history
  const userHistory = history.filter((h) => h.email === email);

  return {
    user,
    history: userHistory,
  };
};

/* =========================
   Get Logged-in User History
========================= */
export const getUserLoginHistory = (email) => {
  const history = getHistory();
  return history.filter((h) => h.email === email);
};