import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  color: ${(props) => props.theme.modeColor};
`;

export const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  padding-left: 15px;
  color: ${({ theme }) => theme.logoColor};
`;

export const ThemeContainer = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;
  padding-right: 3rem;
  cursor: pointer;
  width: 100px;
  height: 100px;
  color: ${({ theme }) => theme.modeColor};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const MenuList = styled.ul`
  display: none;
  font-family: "Poppins", sans-serif;
  align-items: center;
  margin-left: auto;
  list-style: none;
  font-weight: 700;
  gap: 2rem;

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
  gap: 1rem;

  cursor: pointer;
  width: 100px;
  height: 100px;
  color: ${({ theme }) => theme.modeColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
