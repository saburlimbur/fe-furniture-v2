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
}
