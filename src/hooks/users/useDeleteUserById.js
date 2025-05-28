import { useMutation } from '@tanstack/react-query';

import UserService from '@/service/UserService';

export default function useDeleteUserById() {
  const {
    mutateAsync: deleteUserId,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: id => UserService.deleteUserById(id),
  });

  return { deleteUserId, isLoading, isError };
}
