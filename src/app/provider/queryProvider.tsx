"use client";

import React from "react";
import { QueryClientProvider, QueryClient, QueryCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

function QueryProviders({ children }: React.PropsWithChildren) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        throwOnError: true,
      },
      // mutations: {
      //   onError: handleError,
      //   networkMode: "always",
      // },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.log('query', query, error);
        // if (query?.meta?.errorMessage) {
        // }
      },
    }),
  });

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProviders;
