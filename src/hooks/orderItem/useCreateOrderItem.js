/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import OrderItemService from '@/service/OrderItemService';

export default function useCreateOrderItem() {
  const queryClient = useQueryClient();
  const { mutateAsync: createOrderItem } = useMutation({
    mutationKey: ['createOrderItem'],
    mutationFn: ({ order_id, product_id, quantity, price }) =>
      OrderItemService.createOrderItem({
        order_id,
        product_id,
        quantity,
        price,
      }),

    onSuccess: () => {
      toast.success('Order item created successfully!');
      queryClient.invalidateQueries(['order']);
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createOrderItem };
}
