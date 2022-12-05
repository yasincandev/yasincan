import Image from "next/image";
import React, { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
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
  );
};

export default Layout;

const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 1em;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const ImageContainer = styled.div`
  padding: 0 3em;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "ImageContainer children";
  grid-area: 2 / 1 / 3 / 2;
`;
