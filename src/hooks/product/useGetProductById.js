import { useQuery } from '@tanstack/react-query';

import ProductService from '@/service/ProductService';

export default function useGetProductById(id) {
  const {
    data: productId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductService.getProductById(id),
    enabled: !!id,
  });

  return { productId, isLoading, isError };
}
