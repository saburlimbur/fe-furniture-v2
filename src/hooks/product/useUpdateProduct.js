/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import ProductService from '@/service/ProductService';

export default function useUpdateProduct() {
  const queryClient = useQueryClient();
  const {
    mutateAsync: updateProduct,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['updateProduct'],
    mutationFn: ({
      id,
      name,
      description,
      price,
      stock,
      category_id,
      image_url,
    }) =>
      ProductService.updateProduct({
        id,
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
      }),

    onSuccess: () => {
      toast.success('Product updated successfully!');
      queryClient.invalidateQueries({ queryKey: ['products'] });
      // sama saja seperti refetch
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { updateProduct, isLoading, isError };
}
