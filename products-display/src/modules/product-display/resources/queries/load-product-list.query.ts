import { useQuery } from "@/services/use-query-factory";
import { RemoteLoadProductListType } from "../requests";

export function useQueryLoadProductList(
  loadProduct: RemoteLoadProductListType,
  skip: number,
  limit: number,
) {
  return useQuery({
    queryKey: ["product", skip, limit],
    queryFn: async () => await loadProduct.loadAll({ skip, limit }),
    retry: false,
  });
}
