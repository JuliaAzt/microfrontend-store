import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

export const QueryProviderWrapper = ({ children }: { children: ReactNode }) => {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}> {children}</QueryClientProvider>
    );
};