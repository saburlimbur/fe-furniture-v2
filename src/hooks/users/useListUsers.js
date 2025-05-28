import { useQuery } from '@tanstack/react-query';

import UserService from '../../service/UserService';

export default function useListUsers() {
  const {
    data: listUsers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => UserService.listAllUsers(),
  });

  return { listUsers, isLoading, isError };
}
