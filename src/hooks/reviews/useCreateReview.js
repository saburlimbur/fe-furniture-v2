/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import ReviewsService from '@/service/ReviewsService';

export default function useCreateReview() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ['createReview'],
    mutationFn: async ({ user_id, product_id, rating, review_content }) =>
      ReviewsService.createReview({
        user_id,
        product_id,
        rating,
        review_content,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviewProduct'] });
      toast.success('Review created successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return {
    createReview: mutation.mutateAsync,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
  };
}
