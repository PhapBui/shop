import axiosLocation from "./axiosLocation.js";

const locationApi = {
  getDistrict: (proviceId) => {
    return axiosLocation.get(`/districts?region_id=${proviceId}`);
  },
  getWard: (districtId) => {
    return axiosLocation.get(`/wards?district_id=${districtId}`);
  },
  getById: (id) => {
    const url = `/products/${id}`;
    return axiosLocation.get(url);
  },
};
export default locationApi;
