/* eslint-disable arrow-parens */
/* eslint-disable no-console */

/* eslint-disable camelcase */

import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import OrderService from '@/service/OrderService';

export default function useCreateOrder() {
  const {
    mutateAsync: createOrder,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['createOrder'],
    mutationFn: ({ user_id, cart_id, total_price, status }) =>
      OrderService.createOrder({ user_id, cart_id, total_price, status }),

    onSuccess: () => {
      toast.success('Order created successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createOrder, isLoading, isError };
}
