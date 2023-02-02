// @ts-nocheck
import axios from "axios";

const axiosTikiHomeDeal = axios.create({
  baseURL: "https://api.tiki.vn/v2/widget/deals/collection?per_page=12",
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
axiosTikiHomeDeal.interceptors.request.use(async (config) => {
  // const currentUser = firebase.auth().currentUser;
  // if (currentUser) {
  //   const token = await currentUser.getIdToken();
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});
axiosTikiHomeDeal.interceptors.response.use(
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
export default axiosTikiHomeDeal;
