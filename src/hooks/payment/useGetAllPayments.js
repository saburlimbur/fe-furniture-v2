import { useQuery } from '@tanstack/react-query';

import PaymentService from '@/service/PaymentService';

export default function useGetAllPayments() {
  const {
    data: allPayments,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['payments'],
    queryFn: () => PaymentService.listAllPayment(),
  });

  return { allPayments, isLoading, isError, refetch };
}
