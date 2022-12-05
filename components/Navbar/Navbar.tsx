import { FC } from "react";
import pages from "../../data/pages.json";
import Link from "next/link";
import useThemeContext from "../../hooks/useThemeContext";
import { Nav, Logo, ThemeContainer, MenuList, MenuItem } from "./styles";
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
      <MenuList>
        {pages.map((page) => {
          return (
            <Link
              key={page.id}
              href={page.href}
              style={{ textDecoration: "none" }}
            >
              <MenuItem>{page.name}</MenuItem>
            </Link>
          );
        })}
      </MenuList>
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
