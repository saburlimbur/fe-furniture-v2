/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import CartService from '@/service/CartService';

export default function useCreateCart() {
  const {
    mutateAsync: createCart,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['createCart'],
    mutationFn: ({ user_id, total_price }) =>
      CartService.createCart({ user_id, total_price }),

    onSuccess: () => {
      toast.success('Cart created successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createCart, isLoading, isError };
}
