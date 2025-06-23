import { useMutation } from '@tanstack/react-query';

import CheckoutService from '@/service/CheckoutService';

export default function useUpdateCheckout() {
  const { mutateAsync: updateCheckout } = useMutation({
    mutationKey: ['updateCheckout'],
    mutationFn: CheckoutService.updateCheckout,
  });

  return { ...updateCheckout };
}
