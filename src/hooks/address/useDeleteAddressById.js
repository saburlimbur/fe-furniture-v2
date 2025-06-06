/* eslint-disable arrow-parens */
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import AddressService from '@/service/AddressService';

export default function useDeleteAddressById() {
  const {
    mutateAsync: deleteAddress,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['deleteAddress'],
    mutationFn: id => AddressService.deleteAddressById(id),

    onSuccess: () => {
      toast.success('Address deleted successfully!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.error(error.message);
    },
  });

  return { deleteAddress, isLoading, isError };
}
