import { useQuery } from '@tanstack/react-query';

import ShippingService from '@/service/ShippingService';

export default function useGetAllShipping() {
  const {
    data: listShippings,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['allShipping'],
    queryFn: () => ShippingService.getAllShippings(),
  });

  return { listShippings, isLoading, isError };
}
