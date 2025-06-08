import AxiosInterceptor from './AxiosInterceptor';

export default class CheckoutService {
  static async createCheckout(payload) {
    try {
      const result = await AxiosInterceptor.post('/checkout', payload);

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }
}
