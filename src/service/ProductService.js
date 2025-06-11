/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import AxiosInterceptor from './AxiosInterceptor';

export default class ProductService {
  static async createProduct({
    name,
    description,
    price,
    stock,
    category_id,
    image_url,
  }) {
    try {
      const result = await AxiosInterceptor.post('/product', {
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
      });

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async getAllProducts() {
    try {
      const result = await AxiosInterceptor.get('/products');

      return result.data.query;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async getProductById(id) {
    try {
      const result = await AxiosInterceptor.get(`/product/${id}`);

      return result.data.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async deleteProduct(id) {
    try {
      const result = await AxiosInterceptor(`/product/${id}`);

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async updateProduct({
    id,
    name,
    description,
    price,
    stock,
    category_id,
    image_url,
  }) {
    try {
      const result = await AxiosInterceptor.put('/product', {
        id,
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
      });

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }
}
