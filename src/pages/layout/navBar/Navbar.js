import { useEffect, useState } from "react";

import { FaBars } from "react-icons/fa";
import { BsBag, BsHeart } from "react-icons/bs";

import { IconContext } from "react-icons/lib";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBar.styled";

import NavItem from "./NavItem";

import SearchBarModal from "../../../components/searchBarModal";
import { color } from "@chakra-ui/react";

export default function NavBar({ links }) {
  const location = useLocation;
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to={location} onClick={toggleHome}>
              Stalion'S
            </NavLogo>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {links.map((link) => (
                <NavItem key={link.text} {...link} />
              ))}
            </NavMenu>
            <NavBtn>
              <SearchBarModal />
              <NavBtnLink to="/favorites">
                <BsHeart style={{ color: "black" }} />
              </NavBtnLink>
              <NavBtnLink to="/cart">
                <BsBag style={{ color: "black" }} />
              </NavBtnLink>
              <NavBtnLink to="/signIn">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
