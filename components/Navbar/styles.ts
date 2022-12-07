import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  grid-area: 1 / 1 / 2 / 2;
  height: 5rem;
  padding: 0 2rem;
  color: ${(props) => props.theme.modeColor};
  position: relative;
  border-bottom: 2px solid ${(props) => props.theme.helloColor};
`;

export const DesktopMenu = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    padding-right: 15px;
    width: 100%;
  }
`;

export const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  padding-left: 15px;
  color: ${({ theme }) => theme.logoColor};
  display: none;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    display: flex;
  }
`;

export const ThemeContainer = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;

  cursor: pointer;

  color: ${({ theme }) => theme.modeColor};
  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const MenuList = styled.ul`
  display: none;
  font-family: "Poppins", sans-serif;
  align-items: center;
  margin-left: auto;
  margin-right: 2rem;
  list-style: none;
  font-weight: 700;
  gap: 1rem;
  color: ${({ theme }) => theme.modeColor};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  color: ${({ theme }) => theme.modeColor};
  padding: 0 1.5rem;
  line-height: 2rem;
  &:hover {
    color: ${({ theme }) => theme.hoverText};
    background-color: ${({ theme }) => theme.hoverBg};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-right: 15px;
  cursor: pointer;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.modeColor};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuListContainer = styled.div`
  position: absolute;
  top: 5rem;
  right: 0;
  bottom: 0;
  left: 0;
  height: 250px;
  width: 100%;
  background-color: ${({ theme }) => theme.mobileMenuBg};
  z-index: 3;
  display: flex;
  gap: 2rem;

  -webkit-animation: MobileMenuListContainer 1.2s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: MobileMenuListContainer 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;

  @-webkit-keyframes MobileMenuListContainer {
    0% {
      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes MobileMenuListContainer {
    0% {
      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;

export const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-weight: 700;
  gap: 2rem;
  color: ${({ theme }) => theme.modeColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  color: ${({ theme }) => theme.modeColor};
  padding: 0 1.5rem;
  line-height: 2rem;
  &:hover {
    color: ${({ theme }) => theme.hoverText};
    background-color: ${({ theme }) => theme.hoverBg};
  }
`;

export const MobileLogo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  padding-left: 15px;
  color: ${({ theme }) => theme.logoColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileHamburgerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  cursor: pointer;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
