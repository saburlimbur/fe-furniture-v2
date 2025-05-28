import { useQuery } from '@tanstack/react-query';

import CategoryService from '../../service/CategoryService';

export default function useGetCategoryById(id) {
  const {
    data: categoryId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categoryId', id],
    queryFn: () => CategoryService.getCategoryById(id),
    enabled: !!id,
  });

  return { categoryId, isLoading, isError };
}
