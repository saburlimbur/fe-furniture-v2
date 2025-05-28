/* eslint-disable no-console */
/* eslint-disable camelcase */
import AxiosInterceptor from './AxiosInterceptor';

export default class UserService {
  static async createUser({ name, email, phone_number, password, role }) {
    try {
      const result = await AxiosInterceptor.post('/register', {
        name,
        email,
        phone_number,
        password,
        role,
      });

      localStorage.setItem('furniture_token', result.data.token);

      localStorage.setItem('furniture_user', JSON.stringify(result.data.user));

      console.log(result.data);

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async loginUser({ loginData, password }) {
    let email = '';
    let phone_number = '';

    if (/^\d+$/.test(loginData)) {
      phone_number = loginData;
    } else {
      email = loginData;
    }

    try {
      const result = await AxiosInterceptor.post('/login', {
        email,
        phone_number,
        password,
      });

      localStorage.setItem('furniture_token', result.data.token);

      console.log(result.data);
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async listAllUsers() {
    try {
      const result = await AxiosInterceptor.post('/users');
      return result.data;
    } catch (error) {
      console.error('Fetch users error:', error);

      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.message || 'Failed to fetch users');
      }
    }
  }

  static async getUserId(id) {
    try {
      const result = await AxiosInterceptor.get(`/users/${id}`);

      return result.data.user;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async deleteUserById(id) {
    try {
      const result = await AxiosInterceptor.delete(`/users/${id}`);

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }
}
