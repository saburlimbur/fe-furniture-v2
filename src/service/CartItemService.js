import AxiosInterceptor from './AxiosInterceptor';

export default class CartItemService {
  static async createCartItem({
    cart_id,
    product_id,
    quantity,
    subtotal_price,
  }) {
    try {
      const result = await AxiosInterceptor.post('/cart-item', {
        cart_id,
        product_id,
        quantity,
        subtotal_price,
      });
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async getCartItemById(id) {
    try {
      const result = await AxiosInterceptor.get(`/cart-item/${id}`);

      return result.data?.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async deleteCartItem(id) {
    try {
      const result = await AxiosInterceptor.delete(`/cart-item/${id}`);
      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }

  static async updateCartItem({
    id,
    cart_id,
    product_id,
    quantity,
    subtotal_price,
  }) {
    try {
      const result = await AxiosInterceptor.put('/cart-item', {
        id,
        cart_id,
        product_id,
        quantity,
        subtotal_price,
      });

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async getAllCartItems() {
    try {
      const result = await AxiosInterceptor.get('/cart-items');

      result.data?.data?.forEach(item => {});
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
    }
  }
}
