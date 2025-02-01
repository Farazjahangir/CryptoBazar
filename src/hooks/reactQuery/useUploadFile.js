import { useMutation } from '@tanstack/react-query';

import { uploadImageToFirebase } from '../../firebase';

export const useUploadFile = () => {
  return useMutation({
    mutationFn: ({file, folderName}) => uploadImageToFirebase(file, folderName),
  });
};
