import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin-bottom: 2rem;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
`;

export const GreetingText = styled.h1`
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.theme.helloColor};
  font-weight: 900;
  font-style: italic;
  text-align: center;
  font-size: 1.5rem;

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
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.helloColor};
`;

export const InfoText = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.modeColor};

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
