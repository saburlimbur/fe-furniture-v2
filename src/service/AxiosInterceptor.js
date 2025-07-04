/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import toast from 'react-hot-toast';
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
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.warn('Unauthorized! Redirecting to login...');

      localStorage.removeItem('furniture_token');
      localStorage.removeItem('furniture_user');
      localStorage.removeItem('cart_id');
      localStorage.removeItem('cart_data');
      localStorage.removeItem('address_data');
      localStorage.removeItem('payment_data');
      localStorage.removeItem('shipping_data');
      localStorage.removeItem('order_data');
      localStorage.removeItem('cart_item_data');

      toast.error('Unauthorized! Redirecting to login...');

      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    }

    return Promise.reject(error);
  },
);

export default AxiosInterceptor;
