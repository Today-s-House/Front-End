import type { AppProps } from "next/app";
import { Head } from "next/document";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import theme from "../styles/theme";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
