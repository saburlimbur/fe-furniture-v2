import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import ShippingService from '@/service/ShippingService';

export default function useUpdateShipping() {
  const queryClient = useQueryClient();
  const { mutateAsync: updateShipping } = useMutation({
    mutationKey: ['updateShipping'],
    mutationFn: ShippingService.updateShipping,

    onSuccess: () => {
      queryClient.invalidateQueries(['allShipping']); // sama saja seperti refetch
      toast.success('Shipping updated successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { updateShipping };
}
