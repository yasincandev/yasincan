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
  MobileMenuList,
  MobileMenuListContainer,
  MobileMenuItem,
  DesktopMenu,
  MobileLogo,
  MobileThemeContainer,
  MobileHamburgerMenu,
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
      <DesktopMenu>
        <Logo>
          <Link href='/' style={{ textDecoration: "none", color: "inherit" }}>
            <h3>&#10094; YASINCANDEV &#10095;</h3>
          </Link>
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
            <Sunset onClick={toggleTheme} style={{ width: "3.5rem" }} />
          ) : (
            <Sunrise onClick={toggleTheme} style={{ width: "3.5rem" }} />
          )}
        </ThemeContainer>
      </DesktopMenu>
      <MobileMenu>
        <MobileThemeContainer>
          {theme === "dark" ? (
            <Sunset onClick={toggleTheme} style={{ width: "2rem" }} />
          ) : (
            <Sunrise onClick={toggleTheme} style={{ width: "2rem" }} />
          )}
        </MobileThemeContainer>
        <MobileLogo>
          <Link
            href='/'
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h3>&#10094; {""} &#10095;</h3>
          </Link>
        </MobileLogo>
        <MobileHamburgerMenu>
          {open ? (
            <CloseMenu
              onClick={handleToggle}
              style={{ width: "2.5rem", height: "2rem" }}
            />
          ) : (
            <Hamburger onClick={handleToggle} style={{ width: "1.75rem" }} />
          )}
          {open ? (
            <MobileMenuListContainer>
              <MobileMenuList>
                {pages.map((page) => {
                  return (
                    <Link
                      key={page.id}
                      href={page.href}
                      style={{ textDecoration: "none" }}
                    >
                      <MobileMenuItem onClick={handleToggle}>
                        {page.name}
                      </MobileMenuItem>
                    </Link>
                  );
                })}
              </MobileMenuList>
            </MobileMenuListContainer>
          ) : null}
        </MobileHamburgerMenu>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
