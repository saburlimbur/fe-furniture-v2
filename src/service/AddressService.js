/* eslint-disable camelcase */
import AxiosInterceptor from './AxiosInterceptor';

export default class AddressService {
  static async createAddress({
    user_id,
    street,
    city,
    state,
    postal_code,
    country,
  }) {
    try {
      const result = await AxiosInterceptor.post('/address', {
        user_id,
        street,
        city,
        state,
        postal_code,
        country,
      });

      return result.data.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async deleteAddressById(id) {
    try {
      const result = await AxiosInterceptor.delete(`/address/${id}`);

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }
}
