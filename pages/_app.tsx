import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import ThemeContextProvider from "../context/ThemeContext";
import { useThemeContext } from "../hooks";
import { dark, light } from "../theme";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <ThemeContextProvider>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeContextProvider>
  );
};

export default MyApp;
