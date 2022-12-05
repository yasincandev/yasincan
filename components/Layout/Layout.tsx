import Image from "next/image";
import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useThemeContext } from "../../hooks";
import GlobalStyles from "../../styles/GlobalStyles";
import { dark, light } from "../../theme";
import Navbar from "../Navbar/Navbar";
import { Container, ImageContainer, ContentContainer } from "./styles";

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
              src='/assets/main.png'
              alt='main'
              width={500}
              height={500}
              priority
            />
          </ImageContainer>
          <main>{children}</main>
        </ContentContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
