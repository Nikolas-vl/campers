import axiosInstance from './axios';

const campersApi = {
  getAllCampers: async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const response = await axiosInstance.get(`/campers?${params}`);
    return response.data;
  },

  getCamperById: async id => {
    const response = await axiosInstance.get(`/campers/${id}`);
    return response.data;
  },
};

export default campersApi;
