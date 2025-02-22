import { useMutation } from '@tanstack/react-query';

import { updateDocument } from '../../firebase';

export const useUpdateDoc = () => {
  return useMutation({
    mutationFn: ({collectionName, docId, payload}) => updateDocument(collectionName, docId, payload),
  });
};
