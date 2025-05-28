/* eslint-disable camelcase */
/* eslint-disable consistent-return */
import AxiosInterceptor from './AxiosInterceptor';

export default class OrderService {
  static async createOrder({ user_id, cart_id, total_price, status }) {
    try {
      const result = await AxiosInterceptor.post('/order', {
        user_id,
        cart_id,
        total_price,
        status,
      });

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async getOrderById(id) {
    try {
      const result = await AxiosInterceptor.get(`/order/${id}`);

      return result.data?.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }
}
