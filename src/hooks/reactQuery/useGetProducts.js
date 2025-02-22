import { useQuery } from "@tanstack/react-query";
import {queryKeys} from "../../constants";
import { getProducts } from "../../firebase";

export const useGetProducts = ({params, options} = {}) => {
  const keys = Object.values(params ?? {})

  return useQuery({
    queryKey: [queryKeys.USE_GET_PRODUCTS, ...keys],
    queryFn: () => getProducts(params),
    enabled: true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
  });
};
