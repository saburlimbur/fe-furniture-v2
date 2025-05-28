import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import CartItemService from '@/service/CartItemService';

export default function useUpdateCartItem() {
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
      toast.success('Product updated to cart item successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { updateCartItem, isLoading, isError };
}
