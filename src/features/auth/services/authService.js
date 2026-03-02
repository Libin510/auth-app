const USERS_KEY = "users";
const HISTORY_KEY = "loginHistory";

const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];
const saveUsers = (users) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

const getHistory = () => JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
const saveHistory = (history) =>
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));

export const registerUser = (data) => {
  const users = getUsers();

  const exists = users.find((u) => u.email === data.email);
  if (exists) throw new Error("User already exists");

  users.push(data);
  saveUsers(users);

  return data;
};

export const loginUser = ({ email, password }) => {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) throw new Error("Invalid credentials");

  const history = getHistory();
  const entry = {
    email,
    loginTime: new Date().toLocaleString(),
  };

  history.push(entry);
  saveHistory(history);

  return { user, history };
};

export const getLoginHistory = () => getHistory();