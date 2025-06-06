/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import AxiosInterceptor from './AxiosInterceptor';

export default class OrderItemService {
  static async createOrderItem({ order_id, product_id, quantity, price }) {
    try {
      const result = await AxiosInterceptor.post('/order-item', {
        order_id,
        product_id,
        quantity,
        price,
      });

      console.log('API response:', result.data);

      const responseData = result.data?.data || result.data;

      // localStorage.setItem('order_item_data', JSON.stringify(responseData));

      return responseData;
    } catch (error) {
      console.error('Error creating order item:', error);
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Unexpected error occurred');
    }
  }
}
