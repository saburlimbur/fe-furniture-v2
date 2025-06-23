import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import UserService from '@/service/UserService';

export default function useDeleteUserById() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: deleteUserId,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: id => UserService.deleteUserById(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: error => {
      toast.error(error.message || 'Somthing wen wrong');
      console.log(error.message);
    },
  });

  return { deleteUserId, isLoading, isError };
}
