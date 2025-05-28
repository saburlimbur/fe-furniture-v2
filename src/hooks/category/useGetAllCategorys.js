import { useQuery } from '@tanstack/react-query';

import CategoryService from '../../service/CategoryService';

export default function useGetAllCategorys() {
  const {
    data: allCategorys,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categorys'],
    queryFn: () => CategoryService.getAllCategory(),
  });

  return { allCategorys, isLoading, isError };
}
