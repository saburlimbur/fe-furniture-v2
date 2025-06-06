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
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }
}
