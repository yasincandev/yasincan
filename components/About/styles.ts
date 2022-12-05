import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  color: ${(props) => props.theme.aboutMeColor};
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  text-align: justify;
  background-color: ${(props) => props.theme.aboutMeBg};

  padding: 1rem;
  line-height: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 90%;
  }
`;
