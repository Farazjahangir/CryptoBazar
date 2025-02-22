import { useMutation } from '@tanstack/react-query';

import { deleteCategory } from '../../firebase';

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: (category) => deleteCategory(category),
  });
};
