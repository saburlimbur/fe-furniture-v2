import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

import ReviewsService from '@/service/ReviewsService';

export default function useCreateReview() {
  const {
    data: createReview,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['createReview'],
    queryFn: ({ user_id, product_id, rating, review_content }) =>
      ReviewsService.createReview({
        user_id,
        product_id,
        rating,
        review_content,
      }),
    onSuccess: () => {
      toast.success('Review created successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createReview, isLoading, isError };
}
