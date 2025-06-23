import { useQuery } from '@tanstack/react-query';

import CheckoutService from '@/service/CheckoutService';

export default function useGetAllCheckouts() {
  const {
    data: allCheckouts,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['checkouts'],
    queryFn: () => CheckoutService.getAllCheckouts(),
  });

  return { allCheckouts, isLoading, isError, refetch };
}
