import { useQuery as useQueryLib } from "@tanstack/react-query";

import { HttpResponse } from "@/services/http";

export type HttpCacheQueryParams<R> = {
  enabled?: boolean;
  retry?: boolean;
  queryKey: (string | number | boolean | null | undefined)[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryFn: (filters?: any) => Promise<HttpResponse<R>>;
};

export function useQuery<T, E>(params: HttpCacheQueryParams<T>) {
  const { data, isLoading, isError, error, fetchStatus, refetch } = useQueryLib<
    HttpResponse<T>
  >({
    enabled: params.enabled,
    retry: params.retry,
    queryKey: params.queryKey,
    queryFn: (filters) => params.queryFn(filters),
  });

  return {
    data: data?.body ?? ({} as T),
    isLoading: isLoading && fetchStatus !== "idle",
    isError,
    error: error as E,
    refetch,
  };
}
