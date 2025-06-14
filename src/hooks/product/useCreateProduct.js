/* eslint-disable no-console */
/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import ProductService from '../../service/ProductService';

export default function useCreateProduct() {
  const queryClient = useQueryClient();
  const {
    mutate: createProduct,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['product'],
    mutationFn: ({ name, description, price, stock, category_id, image_url }) =>
      ProductService.createProduct({
        name,
        description,
        price,
        stock,
        category_id,
        image_url,
      }),
    onSuccess: () => {
      toast.success('Product created successfully');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: error => {
      toast.error(error.message || 'Somthing wen wrong');
      console.log(error.message);
    },
  });

  return { createProduct, isLoading, isError };
}
