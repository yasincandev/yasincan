import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import ThemeContextProvider from "../context/ThemeContext";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <ThemeContextProvider>
      <Head>
        <title>Yasin Can | Front End Developer</title>
        <link rel='icon' href='/assets/favicon.png' />
        <link rel='apple-touch-icon' href='/assets/apple-touch-icon.png' />
        <meta
          name='description'
          content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
        />
        <meta property='og:url' content='https://yasincan.me' />
        <meta property='og:title' content='Yasin Can | Front End Developer' />
        <meta
          property='og:description'
          content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
        />
        <meta property='og:image' content='/assets/meta.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content='https://yasincan.me' />
        <meta name='twitter:title' content='Yasin Can | Front End Developer' />
        <meta
          name='twitter:description'
          content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
        />
        <meta name='twitter:image' content='/assets/meta.png' />
      </Head>
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
