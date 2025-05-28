import { useQuery } from '@tanstack/react-query';

import UserService from '@/service/UserService';

export default function useGetUserById(id) {
  const {
    data: userId,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user', id],
    queryFn: () => UserService.getUserId(id),
    enabled: !!id,
  });

  return { userId, isLoading, isError };
}
