/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import CartItemService from '@/service/CartItemService';

export default function useUpdateCartItem() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: updateCartItem,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['updateCartItem'],
    mutationFn: ({ id, cart_id, product_id, quantity, subtotal_price }) =>
      CartItemService.updateCartItem({
        id,
        cart_id,
        product_id,
        quantity,
        subtotal_price,
      }),
    onSuccess: () => {
      toast.success('Cart item updated!');
      queryClient.invalidateQueries(['cart']); // sama saja seperti refetch
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { updateCartItem, isLoading, isError };
}
