/* eslint-disable camelcase */
import AxiosInterceptor from './AxiosInterceptor';

export default class ReviewsService {
  static async createReview({ user_id, product_id, rating, review_content }) {
    try {
      const result = await AxiosInterceptor.post('/reviews', {
        user_id,
        product_id,
        rating,
        review_content,
      });

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async getReviewById(id) {
    try {
      const result = await AxiosInterceptor.get(`/reviews/${id}`);

      return result.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }

  static async getReviews() {
    try {
      const result = await AxiosInterceptor.get('reviews');

      return result.data?.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw error; // fallback error
    }
  }
}
