import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";

export const Hamburger: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Container>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100'
        height='100'
        x='0'
        y='0'
        viewBox='0 0 24 24'
        {...props}
      >
        <path
          fill='#42A5F5'
          d='M22.25 0H1.75C.785 0 0 .785 0 1.75v2.5C0 5.215.785 6 1.75 6h20.5C23.215 6 24 5.215 24 4.25v-2.5C24 .785 23.215 0 22.25 0z'
        ></path>
        <path
          fill='#90CAF9'
          d='M22.25 9H1.75C.785 9 0 9.785 0 10.75v2.5C0 14.215.785 15 1.75 15h20.5c.965 0 1.75-.785 1.75-1.75v-2.5C24 9.785 23.215 9 22.25 9zM22.25 18H1.75C.785 18 0 18.785 0 19.75v2.5C0 23.215.785 24 1.75 24h20.5c.965 0 1.75-.785 1.75-1.75v-2.5c0-.965-.785-1.75-1.75-1.75z'
        ></path>
        <path d='M22.25 6H1.75C.785 6 0 5.215 0 4.25v-2.5C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v2.5C24 5.215 23.215 6 22.25 6zM1.75 1.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H1.75zM22.25 15H1.75C.785 15 0 14.215 0 13.25v-2.5C0 9.785.785 9 1.75 9h20.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75zm-20.5-4.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H1.75zM22.25 24H1.75C.785 24 0 23.215 0 22.25v-2.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75zm-20.5-4.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H1.75z'></path>
      </svg>
    </Container>
  );
};

const Container = styled.div`
  -webkit-animation: Container 0.7s linear both;
  animation: Container 0.7s linear both;

  @-webkit-keyframes Container {
    0% {
      -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
      transform: scale(1) rotate3d(1, 1, 0, 0deg);
    }
    50% {
      -webkit-transform: scale(2) rotate3d(1, 1, 0, -180deg);
      transform: scale(2) rotate3d(1, 1, 0, -180deg);
    }
    100% {
      -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
      transform: scale(1) rotate3d(1, 1, 0, -360deg);
    }
  }
  @keyframes Container {
    0% {
      -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
      transform: scale(1) rotate3d(1, 1, 0, 0deg);
    }
    50% {
      -webkit-transform: scale(2) rotate3d(1, 1, 0, -180deg);
      transform: scale(2) rotate3d(1, 1, 0, -180deg);
    }
    100% {
      -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
      transform: scale(1) rotate3d(1, 1, 0, -360deg);
    }
  }
`;
