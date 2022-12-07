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
import Main from "../Main/Main";
import About from "../../pages/about";
import ContactPage from "../Contact/Contact";
import AboutPage from "../About/AboutPage";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const { theme } = useThemeContext();
  const currentTheme = theme === "dark" ? dark : light;
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />

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
          <Main />
        </ContentContainer>
        <AboutPage />
        <ContactPage />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
