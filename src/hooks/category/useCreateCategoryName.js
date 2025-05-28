/* eslint-disable arrow-parens */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

import CategoryService from '../../service/CategoryService';

export default function useCreateCategoryName() {
  const {
    mutate: createCategory,
    isLoading,
    isError,
  } = useMutation({
    mutationKey: ['categoryName'],
    mutationFn: ({ category_name }) =>
      CategoryService.createCategoryName({ category_name }),

    onSuccess: () => {
      toast.success('Successfully create category!');
    },
    onError: error => {
      toast.error(error.message || 'Something went wrong');
      console.log(error.message);
    },
  });

  return { createCategory, isLoading, isError };
}
