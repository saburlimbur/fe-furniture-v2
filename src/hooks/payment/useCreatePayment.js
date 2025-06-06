/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import PaymentService from '@/service/PaymentService';

export default function useCreatePayment() {
  const queryClient = useQueryClient();
  const { mutateAsync: createPayment } = useMutation({
    mutationKey: ['createPayment'],
    mutationFn: ({
      order_id,
      payment_method,
      payment_status,
      payment_date,
      amount,
    }) =>
      PaymentService.createPayment({
        order_id,
        payment_method,
        payment_status,
        payment_date,
        amount,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries(['payment']);
      toast.success('Payment created successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createPayment };
}
