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

  static async getAllCheckouts() {
    try {
      const result = await AxiosInterceptor.get('/checkout');

      return result.data?.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async updateCheckout(payload) {
    try {
      const result = await AxiosInterceptor.put('/checkout', payload);

      const recordCheckout = result.data?.data;
      if (recordCheckout) {
        localStorage.setItem(
          'checkout_history',
          JSON.stringify(recordCheckout),
        );
      }

      return recordCheckout;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }
}
