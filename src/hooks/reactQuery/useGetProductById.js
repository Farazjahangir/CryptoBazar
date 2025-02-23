import { useQuery } from "@tanstack/react-query";
import {queryKeys} from "../../constants";
import { getProductById } from "../../firebase";

export const useGetProductById = ({params, options} = {}) => {
  const keys = Object.values(params ?? {})

  return useQuery({
    queryKey: [queryKeys.USE_GET_PRODUCT_BY_ID, ...keys],
    queryFn: () => getProductById(params),
    enabled: options.enabled ?? false,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};
