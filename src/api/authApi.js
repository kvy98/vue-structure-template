import api from "./api";
const URLS = {
  loginUrl: "/login",
};
export const login = (email, password) => {
  return api.get(URLS.loginUrl, {
    email,
    password,
  });
};
