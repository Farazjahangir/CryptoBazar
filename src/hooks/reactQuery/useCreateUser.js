import { useMutation } from '@tanstack/react-query';

import { createUser } from '../../firebase';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (payload) => createUser(payload),
  });
};
