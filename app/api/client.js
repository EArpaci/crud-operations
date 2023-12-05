import authStorage from '../auth/storage';
import axios from 'axios';
import config from '../lib/config';

const apiClient = axios.create({
  baseURL: config.apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(async (config) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return config;
  config.headers['Authorization'] = `Basic ZGVtbzpkZW1v`;
  return config;
});

export default apiClient;
