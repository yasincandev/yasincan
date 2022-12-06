import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;

  width: 100%;
  min-height: 100vh;
  transition: background-color 0.3s ease;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ImageContainer = styled.div`
  padding: 0 3em;
  -webkit-animation: ImageContainer 1s 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    both;
  animation: ImageContainer 1s 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both; 
  @-webkit-keyframes ImageContainer {
    0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }
  @keyframes ImageContainer {
    0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3em;
  }
`;
