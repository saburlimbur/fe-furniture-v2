import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import PaymentService from '@/service/PaymentService';

export default function useUpdatePayment() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: updatePayment,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['updatePayment'],
    mutationFn: ({ id, data }) => PaymentService.updatePayment({ id, data }),

    onSuccess: () => {
      toast.success('Payment updated!');
      queryClient.invalidateQueries(['payment']); // sama saja seperti refetch
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });
  return { updatePayment, isLoading, isError };
}
