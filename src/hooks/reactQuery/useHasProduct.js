import { useQuery } from "@tanstack/react-query";
import {queryKeys} from "../../constants";
import { hasActiveProducts } from "../../firebase";

export const useHasProduct = (params = {}, options = {}) => {
  return useQuery({
    queryKey: [queryKeys.USE_HAS_PRODUCT],
    queryFn: () => hasActiveProducts(params),
    enabled: options.enabled ?? false,
    refetchOnWindowFocus: options.refetchOnWindowFocus ?? false,
  });
};
