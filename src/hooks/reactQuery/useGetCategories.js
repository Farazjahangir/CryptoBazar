import { useQuery } from "@tanstack/react-query";
import {queryKeys} from "../../constants";
import { getCategories } from "../../firebase";

export const useGetCategories = (params = {}, options = {}) => {
  return useQuery({
    queryKey: [queryKeys.USE_GET_CATEGORIES],
    queryFn: () => getCategories(params),
    enabled: true,
    refetchOnWindowFocus: options.refetchOnWindowFocus ?? true,
  });
};
