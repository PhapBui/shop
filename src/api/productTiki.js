import axiosTiki from "./axiosTiki.js";

const productApi = {
  getAll: (params) => {
    return axiosTiki.get(`/products`, { params });
  },
  getById: (id) => {
    const url = `/products/${id}`;
    return axiosTiki.get(url);
  },
};
export default productApi;
