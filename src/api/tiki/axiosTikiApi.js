// @ts-nocheck
import axios from "axios";

const appTikiApi = axios.create({
  baseURL: process.env.REACT_APP_API_TIKI,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
appTikiApi.interceptors.request.use(async (config) => {
  // const currentUser = firebase.auth().currentUser;
  // if (currentUser) {
  //   const token = await currentUser.getIdToken();
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});
appTikiApi.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default appTikiApi;
