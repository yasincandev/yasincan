import { FC, useState } from "react";
import pages from "../../data/pages.json";
import Link from "next/link";
import useThemeContext from "../../hooks/useThemeContext";
import {
  Nav,
  Logo,
  ThemeContainer,
  MenuList,
  MenuItem,
  MobileMenu,
} from "./styles";
import { Sunrise } from "../Icons/Sunrise";
import { Sunset } from "../Icons/Sunset";
import { Hamburger } from "../Icons/Hamburger";
import { CloseMenu } from "../Icons/CloseMenu";

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useThemeContext();
  const { theme } = useThemeContext();

  const handleToggle = () => {
    setOpen(!open);
  };

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
      <MobileMenu>
        {open ? (
          <CloseMenu
            onClick={handleToggle}
            style={{ width: "2.5rem", height: "2.5rem" }}
          />
        ) : (
          <Hamburger onClick={handleToggle} style={{ width: "2.5rem" }} />
        )}
        {open && (
          <MenuList>
            {pages.map((page) => {
              return (
                <Link
                  key={page.id}
                  href={page.href}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleToggle}>{page.name}</MenuItem>
                </Link>
              );
            })}
          </MenuList>
        )}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
