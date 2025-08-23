import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

const backendKeys = {
  ac: 'AC',
  automatic: 'transmission',
  kitchen: 'kitchen',
  tv: 'TV',
  bathroom: 'bathroom',
};

const campersApi = {
  getAllCampers: async ({ page, limit, filters = {} }) => {
    const { location, vehicleType, equipment = {} } = filters;

    let params = { page, limit };

    if (location) params.location = location;
    if (vehicleType) params.form = vehicleType;

    Object.entries(equipment).forEach(([key, value]) => {
      if (value === true) {
        const backendKey = backendKeys[key];
        if (backendKey) {
          if (backendKey === 'transmission') {
            params.transmission = 'automatic';
          } else {
            params[backendKey] = true;
          }
        }
      }
    });

    const { data } = await instance.get('/campers', { params });
    return data;
  },

  getCamperById: async id => {
    const { data } = await instance.get(`/campers/${id}`);
    return data;
  },
};

export default campersApi;
