import { useMutation } from '@tanstack/react-query';

import { signIn } from '../../firebase';

export const useSignIn = () => {
  return useMutation({
    mutationFn: (payload) => signIn(payload),
  });
};
