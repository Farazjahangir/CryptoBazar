import { useQuery } from "@tanstack/react-query";
import {queryKeys} from "../../constants";
import { getCategories } from "../../firebase";

export const useGetCategories = ({params, options} = {}) => {
  const keys = Object.values(params ?? {})

  return useQuery({
    queryKey: [queryKeys.USE_GET_CATEGORIES, ...keys],
    queryFn: () => getCategories(params),
    enabled: true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};
