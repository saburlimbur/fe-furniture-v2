/* eslint-disable no-console */
/* eslint-disable camelcase */

import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import AddressService from '@/service/AddressService';

export default function useCreateAddress() {
  const {
    mutateAsync: createAddress,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['createAddress'],
    mutationFn: ({ user_id, street, city, state, postal_code, country }) =>
      AddressService.createAddress({
        user_id,
        street,
        city,
        state,
        postal_code,
        country,
      }),

    onSuccess: () => {
      toast.success('Address created successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createAddress, isLoading, isError };
}
