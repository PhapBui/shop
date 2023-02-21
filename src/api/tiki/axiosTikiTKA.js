// @ts-nocheck
import axios from "axios";

const appTikiTKA = axios.create({
  baseURL: process.env.REACT_APP_TIKI_TKA_API,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
appTikiTKA.interceptors.request.use(async (config) => {
  // const currentUser = firebase.auth().currentUser;
  // if (currentUser) {
  //   const token = await currentUser.getIdToken();
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});
appTikiTKA.interceptors.response.use(
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
export default appTikiTKA;
