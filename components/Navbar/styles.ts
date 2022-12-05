import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  width: 100%;
  height: 10vh;
  color: ${(props) => props.theme.modeColor};
`;

export const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  padding-left: 3rem;
  color: ${({ theme }) => theme.logoColor};
`;

export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 3rem;
  cursor: pointer;
  width: 100px;
  height: 100px;
  color: ${({ theme }) => theme.modeColor};
`;

export const MenuList = styled.ul`
  display: flex;
  font-family: "Poppins", sans-serif;
  align-items: center;
  margin-left: auto;
  list-style: none;
  font-weight: 700;
  gap: 2rem;
  padding-right: 3rem;
  color: ${({ theme }) => theme.modeColor};
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
