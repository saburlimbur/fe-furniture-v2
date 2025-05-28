import { useQuery } from '@tanstack/react-query';

import CartService from '@/service/CartService';

export default function useGetCartById(id) {
  const {
    data: cartId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cartId', id],
    queryFn: () => CartService.getCartById(id),
    enabled: !!id,
  });

  return { cartId, isLoading, isError };
}
