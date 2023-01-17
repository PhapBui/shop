// @ts-nocheck
import axios from "axios";
const token = "FEMbbLndRm9siXiCyQIBXMP1";

const axiosLocation = axios.create({
  baseURL: process.env.REACT_APP_LOCATION_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
axiosLocation.interceptors.request.use(async (config) => {
  // const currentUser = firebase.auth().currentUser;
  // if (currentUser) {
  //   const token = await currentUser.getIdToken();
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
axiosLocation.interceptors.response.use(
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
export default axiosLocation;
