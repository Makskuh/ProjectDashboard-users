import axios from 'axios';
import CONSTANTS from '../constants';

const httpClient = axios.create({
  baseURL: CONSTANTS.HTTP_BASE_URL
});

httpClient.interceptors.response.use(function (response) {

  const { data } = response;

  if (data?.data?.accessToken) {
    localStorage.setItem(CONSTANTS.TOKEN_STRING, data.data.accessToken);
  }

  return response;
}, function (error) {

  return Promise.reject(error);
});

httpClient.interceptors.request.use(function (config) {

  const token = localStorage.getItem(CONSTANTS.TOKEN_STRING);

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  config.headers['ngrok-skip-browser-warning'] = 'skip';

  return config;
}, function (error) {
  return Promise.reject(error);
});

export const login = (userData) => httpClient.post('/auth/login', userData);
export const registration = (userData) => httpClient.post('/auth/registration', userData);
export const refresh = (token) => httpClient.post('/auth/refresh', { token });