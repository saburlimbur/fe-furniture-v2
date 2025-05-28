import { useQuery } from '@tanstack/react-query';

import OrderService from '@/service/OrderService';

export default function useGetOrderById(id) {
  const {
    data: orderId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['orderId', id],
    queryFn: () => OrderService.getOrderById(id),
    enabled: !!id,
  });

  return { orderId, isLoading, isError };
}
