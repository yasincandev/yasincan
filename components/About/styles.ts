import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3rem;
  width: 100%;
  transition: AboutContainer 1s ease;
  -webkit-animation: AboutContainer 0.5s 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    both;
  animation: AboutContainer 0.5s 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both; 
  @-webkit-keyframes AboutContainer {
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
  @keyframes AboutContainer {
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

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const AboutMeTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.aboutMeColor};
`;

export const AboutMeText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  text-align: justify;
  padding: 0.5rem;
  color: ${(props) => props.theme.aboutMeColor};
  line-height: 1.5rem;
`;
