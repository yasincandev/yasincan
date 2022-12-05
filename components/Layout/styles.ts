import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 0px 1em;
  width: 100%;
  min-height: 100vh;
  transition: background-color 0.3s ease;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
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
  display: grid;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "ImageContainer children";
  grid-area: 2 / 1 / 3 / 2;
`;
