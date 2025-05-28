/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import AxiosInterceptor from './AxiosInterceptor';

export default class CategoryService {
  static async createCategoryName({ category_name }) {
    try {
      const result = await AxiosInterceptor.post('/category', {
        category_name,
      });

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async getAllCategory() {
    try {
      const result = await AxiosInterceptor.get('/category');

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async getCategoryById(id) {
    try {
      const result = await AxiosInterceptor.get(`/category/${id}`);

      return result.data.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }
}
