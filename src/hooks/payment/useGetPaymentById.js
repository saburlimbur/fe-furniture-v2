import { useQuery } from '@tanstack/react-query';

import PaymentService from '@/service/PaymentService';

export default function useGetPaymentById(id) {
  const {
    data: paymentId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['payment', id],
    queryFn: () => PaymentService.getPaymentById(id),
    enabled: !!id,
  });

  return { paymentId, isLoading, isError };
}
