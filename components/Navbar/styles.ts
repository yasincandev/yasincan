import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0 20px;
  color: ${(props) => props.theme.modeColor};

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
  }
`;

export const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  padding-left: 15px;
  color: ${({ theme }) => theme.logoColor};

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

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
`;
