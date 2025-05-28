import { useQuery } from '@tanstack/react-query';

import ProductService from '../../service/ProductService';

export default function useGetAllProducts() {
  const {
    data: allProducts,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductService.getAllProducts(),
  });

  return { allProducts, isLoading, isError, refetch };
}
