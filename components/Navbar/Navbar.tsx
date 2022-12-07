import { FC } from "react";
import useThemeContext from "../../hooks/useThemeContext";
import { Nav, Logo, ThemeContainer } from "./styles";
import { Sunrise } from "../Icons/Sunrise";
import { Sunset } from "../Icons/Sunset";

const Navbar: FC = () => {
  const { toggleTheme } = useThemeContext();
  const { theme } = useThemeContext();

  return (
    <Nav>
      <Logo>
        <h3>&#10094; YASINCANDEV &#10095;</h3>
      </Logo>
      <ThemeContainer>
        {theme === "dark" ? (
          <Sunset onClick={toggleTheme} />
        ) : (
          <Sunrise onClick={toggleTheme} />
        )}
      </ThemeContainer>
    </Nav>
  );
};

export default Navbar;
