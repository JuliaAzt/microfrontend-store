import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Store } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface ProvidersProps {
  theme: ThemeOptions;
  store: Store;
}

export default function Providers(props: PropsWithChildren<ProvidersProps>) {
  const { children, theme, store } = props;


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}
