// @ts-nocheck
import axios from "axios";
const appTiki = axios.create({
  baseURL: process.env.REACT_APP_TIKI_BASE_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "X-Access-Token":
      "bc754ef3df1b47ee2412b1839a460bcecc0055e6f68d378499be93a9ea0195ba",
  },
});
// Add a request interceptor
appTiki.interceptors.request.use(async (config) => {
  // const currentUser = firebase.auth().currentUser;
  // if (currentUser) {
  //   const token = await currentUser.getIdToken();
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});
appTiki.interceptors.response.use(
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
export default appTiki;
