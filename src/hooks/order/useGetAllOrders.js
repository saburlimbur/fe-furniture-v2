import { useQuery } from '@tanstack/react-query';

import OrderService from '@/service/OrderService';

export default function useGetAllOrders() {
  const {
    data: allOrders,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: () => OrderService.getAllOrders(),
  });

  return { allOrders, isLoading, isError, refetch };
}
