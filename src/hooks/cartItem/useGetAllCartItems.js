import { useQuery } from '@tanstack/react-query';

import CartItemService from '@/service/CartItemService';

export default function useGetAllCartItems() {
  const {
    data: cartItemsAll,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['cartItems'],
    queryFn: () => CartItemService.getAllCartItems(),
  });

  return { cartItemsAll, isLoading, isError };
}
