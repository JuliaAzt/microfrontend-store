import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Store } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import { Provider } from "react-redux";

interface ProvidersProps {
  theme: ThemeOptions;
  store: Store;
}

export default function Providers(props: PropsWithChildren<ProvidersProps>) {
  const { children, theme, store } = props;

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
