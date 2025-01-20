"use client";

import { QueryClient, QueryKey } from "@tanstack/react-query";
import { service } from "./service";

const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  const { data } = await service.get(`${queryKey[0]}`);
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
