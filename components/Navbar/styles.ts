import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0 20px;
  color: ${props => props.theme.modeColor};

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
  }
`

export const Logo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  padding-left: 15px;
  color: ${({ theme }) => theme.logoColor};

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`

export const GreetingContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  }
`

export const GrettingText = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.greetingColor};
  font-weight: 900;
  font-style: italic;
  text-align: center;
  font-size: 1.5rem;
  text-transform: Capitalize;
  padding: 0.5em;
  width: 100%;
  letter-spacing: 0.2rem;
  -webkit-animation: GreetingContainer 1s cubic-bezier(0.165, 0.84, 0.44, 1)
    both;
  animation: GreetingContainer 1s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  @-webkit-keyframes GreetingContainer {
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
  @keyframes GreetingContainer {
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
`

export const ThemeContainer = styled.div`
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.modeColor};
  @media screen and (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
