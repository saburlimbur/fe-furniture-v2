import { useQuery } from '@tanstack/react-query';

import UserService from '@/service/UserService';

export default function useGetUserById(id) {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user', id],
    queryFn: () => UserService.getUserId(id),
    enabled: !!id,
  });

  return { user, isLoading, isError };
}
