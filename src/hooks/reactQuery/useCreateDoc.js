import { useMutation } from '@tanstack/react-query';

import { createDoc } from '../../firebase';

export const useCreateDoc = () => {
  return useMutation({
    mutationFn: ({payload, collection, docId}) => createDoc(payload, collection, docId),
  });
};
