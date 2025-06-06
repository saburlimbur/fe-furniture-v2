import { useQuery } from '@tanstack/react-query';

import CartItemService from '@/service/CartItemService';

export default function useGetCartItemById(id) {
  const {
    data: cartItemId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cartItemId'],
    queryFn: () => CartItemService.getCartItemById(id),
    enabled: !!id,
  });

  return { cartItemId, isLoading, isError };
}
