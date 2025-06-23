/* eslint-disable arrow-parens */
/* eslint-disable no-return-await */
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import CheckoutService from '@/service/CheckoutService';

export default function useCreateCheckout() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: createCheckoutMutation,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['createCheckout'],
    mutationFn: async payload => {
      console.log('payload:', payload);
      return await CheckoutService.createCheckout(payload);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(['checkouts']);
      toast.success('Checkout created successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createCheckoutMutation, isLoading, isError };
}
