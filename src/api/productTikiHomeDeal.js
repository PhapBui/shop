import axiosTikiHomeDeal from "./axiosTikiHomeDeal.js";

const productTikiHomeDeal = {
  getAll: (params) => {
    return axiosTikiHomeDeal.get(`/`, { params });
  },
  getById: (id) => {
    const url = `/products/${id}`;
    return axiosTikiHomeDeal.get(url);
  },
};
export default productTikiHomeDeal;
