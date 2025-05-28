import { useQuery } from '@tanstack/react-query';

import CartItemService from '@/service/CartItemService';

export default function useGetCartItemById(cartId) {
  const {
    data: cartItemId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cartItemId', cartId],
    queryFn: () => CartItemService.getCartItemById(cartId),
    enabled: !!cartId,
  });

  return { cartItemId, isLoading, isError };
}
