import { useMutation } from '@tanstack/react-query';

import CartService from '@/service/CartService';

const useUpdateCart = () => {
  const mutation = useMutation({
    mutationFn: CartService.updateCart,
  });

  return {
    updateCart: mutation.mutateAsync,
    ...mutation,
  };
};

export default useUpdateCart;
