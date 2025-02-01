import { useMutation } from '@tanstack/react-query';

import { createDoc } from '../../firebase';

export const useCreateDoc = () => {
  return useMutation({
    mutationFn: ({payload, collectionName, docId}) => createDoc(payload, collectionName, docId),
  });
};
