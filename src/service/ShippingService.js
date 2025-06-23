/* eslint-disable camelcase */
import AxiosInterceptor from './AxiosInterceptor';

export default class ShippingService {
  static async createShipping({
    order_id,
    address_id,
    shipping_cost,
    shipping_date,
    status,
  }) {
    try {
      const result = await AxiosInterceptor.post('/shipping', {
        order_id,
        address_id,
        shipping_cost,
        shipping_date,
        status,
      });

      const responseData = result.data?.data || result.data;

      localStorage.setItem('shipping_data', JSON.stringify(responseData));

      return responseData;
    } catch (error) {
      console.error('Error creating order item:', error);
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Unexpected error occurred');
    }
  }

  static async getShippingByid(id) {
    try {
      const result = await AxiosInterceptor.get(`/shipping/${id}`);
      const responseData = result.data?.data || result.data;

      return responseData;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async updateShipping({ id, payload }) {
    try {
      const result = await AxiosInterceptor.put(`/shipping${id}`, payload);

      const responseData = result.data?.data || result.data;

      localStorage.setItem('shipping_data', JSON.stringify(responseData));
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  }

  static async getAllShippings() {
    try {
      const result = await AxiosInterceptor.get('/shippings');

      return result.data?.query ?? []; // fallback array kosong
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  }
}
