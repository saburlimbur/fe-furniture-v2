/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import AxiosInterceptor from './AxiosInterceptor';

export default class CartService {
  static async createCart({ user_id, total_price }) {
    try {
      const result = await AxiosInterceptor.post('/cart', {
        user_id,
        total_price,
      });

      const cartData = result.data?.data;

      if (cartData) {
        localStorage.setItem('cart_data', JSON.stringify(cartData));
      }

      return cartData;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async getCartById(id) {
    try {
      const result = await AxiosInterceptor.get(`/cart/${id}`);

      // localStorage.getItem('cart_id', result.data);

      return result.data?.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async updateCart(payload) {
    try {
      const result = AxiosInterceptor.put('/cart', payload); // isi body dari BE

      const updatedCart = result.data?.data;
      if (updatedCart) {
        localStorage.setItem('cart_data', JSON.stringify(updatedCart));
      }

      return updatedCart;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }
}
