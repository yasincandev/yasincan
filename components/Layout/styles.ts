import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  transition: background-color 0.3s ease;
  background-color: ${props => props.theme.backgroundColor};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  padding: 1em;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3em;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3em;
    width: 90%;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2em;
    width: 80%;
  }

  @media screen and (min-width: 2560px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
    width: 60%;
  }
`

export const ImageContainer = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
 max-width: 200px;
  margin: 0 auto;
  width: 100%;

  
  
  

  @media screen and (min-width: 768px) {
    grid-area: ImageContainer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 450px;

    margin-left: 2em;
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

`

export const GreetingMobileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
