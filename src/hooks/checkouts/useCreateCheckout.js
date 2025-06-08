import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import CheckoutService from '@/service/CheckoutService';

export default function useCreateCheckout(payload) {
  const queryClient = useQueryClient();
  const {
    mutateAsync: createCheckout,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['createCheckout'],
    mutationFn: () => CheckoutService.createCheckout(payload),

    onSuccess: () => {
      queryClient.invalidateQueries(['checkout']);
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createCheckout, isLoading, isError };
}
