/* eslint-disable arrow-parens */
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import CartItemService from '@/service/CartItemService';

export default function useDeleteCartItem() {
  const {
    mutateAsync: deleteCartItem,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['deleteCartItem'],
    mutationFn: id => CartItemService.deleteCartItem(id),
    onSuccess: () => {
      toast.success('Product removed from cart successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { deleteCartItem, isLoading, isError };
}
