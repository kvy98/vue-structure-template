const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_AUTH = "SET_AUTH";
const SET_AUTH_DEFAULT = "SET_AUTH_DEFAULT";
const authPath = (type) => {
  return `auth/${type}`;
};
export { LOGIN, LOGOUT, SET_AUTH, SET_AUTH_DEFAULT, authPath };
