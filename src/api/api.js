import axios from "axios";
import envSettings from "@/config/env-setting";
const envName = process.env.NODE_ENV || "development";
// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL: envSettings[envName].baseURL,

  // Alternative if you have more environments
  // baseURL: process.env.VUE_APP_API_BASE_URL
};
// Create axios instance with default params
const axiosInstance = axios.create(axiosParams);
// Main api function
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
const api = (axios) => {
  // Wrapper functions around axios
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};
// Initialise the api function and p
export default api(axiosInstance);
