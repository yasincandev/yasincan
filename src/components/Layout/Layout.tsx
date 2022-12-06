import Image from "next/image";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "../../hooks";
import GlobalStyles from "../../styles/GlobalStyles";
import { dark, light } from "../../theme";
import Navbar from "../Navbar/Navbar";
import { Container, ImageContainer, ContentContainer } from "./styles";
import * as mainImage from "../../public/assets/main.png";

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
