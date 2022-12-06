import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 0px 1em;
`;

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  transition: all 0.5s ease;
`;

export const GreetingText = styled.h1`
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.helloColor};
  font-weight: 900;
  font-style: italic;
  text-align: center;
  font-size: 48px;
  grid-area: GreetingText;
  text-transform: Capitalize;
  padding: 0.5em;
  width: 100%;
  letter-spacing: 0.2rem;
  -webkit-animation: greetingContainer 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    both;
  animation: greetingContainer 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  @-webkit-keyframes greetingContainer {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
  @keyframes greetingContainer {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.helloColor};
`;

export const InfoText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.2rem;
`;
