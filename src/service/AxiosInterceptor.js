/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const AxiosInterceptor = axios.create({
  baseURL: 'http://localhost:9000/api_v1',
  timeout: 5000,
});

AxiosInterceptor.interceptors.request.use(
  config => {
    const token = localStorage.getItem('furniture_token');

    console.log('furniture_token', token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  error => Promise.reject(error),
);

// unauthoreze
AxiosInterceptor.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized! Redirecting to login...');

      localStorage.removeItem('furniture_token');

      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default AxiosInterceptor;
