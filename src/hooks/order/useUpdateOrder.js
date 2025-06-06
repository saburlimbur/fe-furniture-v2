import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import OrderService from '@/service/OrderService';

export default function useUpdateOrder() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ['updateOrder'],
    mutationFn: OrderService.updateOrder,

    onSuccess: () => {
      toast.success('Order updated successfully!');
      queryClient.invalidateQueries(['order']); // sama saja seperti refetch
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return {
    updateOrder: mutation.mutateAsync,
    ...mutation,
  };
}
