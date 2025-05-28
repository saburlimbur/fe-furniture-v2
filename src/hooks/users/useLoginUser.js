/* eslint-disable arrow-parens */
/* eslint-disable no-console */
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import UserService from '../../service/UserService';

export default function useLoginUser() {
  const navigate = useNavigate();
  const {
    mutateAsync: loginUser,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: ({ loginData, password }) =>
      UserService.loginUser({ loginData, password }),

    onSuccess: () => {
      navigate('/');
      toast.success('Login Successfully');
    },

    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { loginUser, isLoading, isError };
}
