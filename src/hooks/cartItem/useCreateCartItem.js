/* eslint-disable no-console */

/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import CartItemService from '@/service/CartItemService';

export default function useCreateCartItem() {
  const {
    mutateAsync: createCartItem,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['createCart'],
    mutationFn: ({ cart_id, product_id, quantity, subtotal_price }) =>
      CartItemService.createCartItem({
        cart_id,
        product_id,
        quantity,
        subtotal_price,
      }),

    onSuccess: () => {
      toast.success('Product added to cart successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createCartItem, isLoading, isError };
}
