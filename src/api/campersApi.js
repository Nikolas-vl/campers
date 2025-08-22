import { axiosInstance } from './axios';

export const buildCampersParams = ({
  filters = {},
  page = 1,
  limit = 8,
} = {}) => {
  const params = { page, limit };

  const { location = '', type = '', options = [] } = filters;

  if (location.trim()) params.search = location.trim();

  if (type) params.form = type;

  const FEATURES = [
    'AC',
    'bathroom',
    'kitchen',
    'TV',
    'radio',
    'refrigerator',
    'microwave',
    'gas',
    'water',
  ];

  FEATURES.forEach(feat => {
    if (options.includes(feat)) params[feat] = true;
  });

  return params;
};

export const getCampers = async (cfg = {}) => {
  const params = buildCampersParams(cfg);
  const { data } = await axiosInstance.get('/campers', { params });
  return data;
};
