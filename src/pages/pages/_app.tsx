import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../constants/theme";
import { DefaultLayout, LayoutComponent } from "../layouts/DefaultLayout";
import "../styles/globals.css";

type LayoutAppProps = {
  Component: {
    Layout: LayoutComponent;
  };
} & AppProps;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: LayoutAppProps) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
