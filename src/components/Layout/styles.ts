import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0px 0px;
  width: 100%;
  min-height: 100vh;
  transition: background-color 0.3s ease;
  background-color: ${(props) => props.theme.backgroundColor};

  @media screen and (min-width: 768px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-rows: 0.3fr 1.7fr;
    gap: 3em 1em;
  }
`;

export const ImageContainer = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  

  @media screen and (min-width: 768px) {
    grid-area: ImageContainer;
  }



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
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: space-around;

    gap: 20px;
    padding: 0 2em;
    grid-template-areas: "ImageContainer MainContainer";
    grid-area: 2 / 1 / 3 / 2;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-area: MainContainer;
  }
`;
