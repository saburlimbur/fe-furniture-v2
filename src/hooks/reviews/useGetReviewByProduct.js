import { useQuery } from '@tanstack/react-query';

import ReviewsService from '@/service/ReviewsService';

export default function useGetReviewByProduct(productId) {
  return useQuery({
    queryKey: ['reviewProduct', productId],
    queryFn: async () => {
      const reviews = await ReviewsService.getReviews();
      return reviews.filter(review => review.product_id === Number(productId));
    },
    enabled: !!productId,
  });
}
