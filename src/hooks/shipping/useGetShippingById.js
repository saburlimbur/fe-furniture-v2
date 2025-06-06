import { useQuery } from '@tanstack/react-query';

import ShippingService from '@/service/ShippingService';

export default function useGetShippingById(id) {
  const {
    data: shippingId,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['shippingId'],
    queryFn: () => ShippingService.getShippingByid(id),
    enabled: !!id,
  });

  return { shippingId, isLoading, isError, refetch };
}
