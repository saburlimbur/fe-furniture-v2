/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import UserService from '../../service/UserService';

export default function useRegisterUser({ redirect = true } = {}) {
  const navigate = useNavigate();
  const {
    mutateAsync: registerUser,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['register'],
    mutationFn: ({ name, email, phone_number, password, role }) =>
      UserService.createUser({ name, email, phone_number, password, role }),
    onSuccess: () => {
      toast.success('Register successfully');

      if (redirect) {
        navigate('/login');
      }
    },

    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { registerUser, isLoading, isError };
}
