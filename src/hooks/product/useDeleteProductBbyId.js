/* eslint-disable no-unused-vars */
import { useMutation } from '@tanstack/react-query';

export default function useDeleteProductById() {
  const { mutateAsync: deleteProductId } = useMutation({
    mutationKey: ['deleteProductId'],
    mutationFn: () => {},
  });
}
