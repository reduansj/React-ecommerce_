import { NavLinkScroll, NavLink, NavList } from "./NavBar.styled";

const NavItem = ({ type, ...link }) => {
  const linkTypes = {
    navLink: <NavLink to={link.to}>{link.text}</NavLink>,
    scrollLink: (
      <NavLinkScroll
        to={link.to}
        smooth={link.smooth}
        duration={link.duration}
        spy={link.spy}
        offset={link.offset}
      >
        {link.text}
      </NavLinkScroll>
    ),
    category: <NavLink to={`category/${link.category}`}>{link.text}</NavLink>,
  };

  return <NavList>{linkTypes[type]}</NavList>;
};

export default NavItem;
