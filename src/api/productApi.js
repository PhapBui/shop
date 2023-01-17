import axiosClient from "./axiosClient.js";

const productApi = {
  getAll: (params) => {
    return axiosClient.get(`/products`, { params });
  },
  getById: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};
export default productApi;
