/* eslint-disable camelcase */
import AxiosInterceptor from './AxiosInterceptor';

export default class PaymentService {
  static async createPayment({
    order_id,
    payment_method,
    payment_status,
    payment_date,
    amount,
  }) {
    try {
      const result = await AxiosInterceptor.post('/payment', {
        order_id,
        payment_method,
        payment_status,
        payment_date,
        amount,
      });

      localStorage.setItem('payment_data', JSON.stringify(result.data?.data));

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  }

  static async listAllPayment() {
    try {
      const result = await AxiosInterceptor.get('/payment');
      return result.data?.data;
    } catch (error) {
      console.error('Fetch payment error:', error);

      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.message || 'Failed to fetch payment');
      }
    }
  }
}
