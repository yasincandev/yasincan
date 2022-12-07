import Image from "next/image";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../../hooks";
import GlobalStyles from "../../styles/GlobalStyles";
import { dark, light } from "../../theme";
import Navbar from "../Navbar/Navbar";
import {
  Container,
  ImageContainer,
  ContentContainer,
  MainContainer,
} from "./styles";
import * as mainImage from "../../public/assets/main.png";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const { theme } = useThemeContext();
  const currentTheme = theme === "dark" ? dark : light;
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <title>Yasin Can | Front End Developer</title>
        <meta
          name='description'
          content="Hi. I'm Yasin. I'm a front end developer.I build things for the web."
        />
        <meta property='og:url' content='https://yasincan.me' />
        <meta property='og:title' content='Yasin Can | Front End Developer' />
      </Head>
      <Container>
        <Navbar />
        <ContentContainer>
          <ImageContainer>
            <Image
              src={mainImage}
              alt='main'
              priority
              placeholder='blur'
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              width={400}
              height={400}
            />
          </ImageContainer>
          <MainContainer>{children}</MainContainer>
        </ContentContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
