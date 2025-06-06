/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import ShippingService from '@/service/ShippingService';

export default function useCreateShipping() {
  const queryClient = useQueryClient();
  const { mutateAsync: createShipping } = useMutation({
    mutationKey: ['createShipping'],
    mutationFn: ({
      order_id,
      address_id,
      shipping_cost,
      shipping_date,
      status,
    }) =>
      ShippingService.createShipping({
        order_id,
        address_id,
        shipping_cost,
        shipping_date,
        status,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries(['shipping']);
      toast.success('Cart created successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createShipping };
}
