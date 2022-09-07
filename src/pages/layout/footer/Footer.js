import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
} from "./Footer.styled";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/"> About us</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/"> About us</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/"> About us</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/"> About us</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialMediaLogo to="/" onClick={toggleHome}>
            STALION'S
          </SocialMediaLogo>
          <WebsiteRights>
            STALION'S © {new Date().getFullYear()} All rights reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconsLink
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconsLink>
            <SocialIconsLink
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconsLink>
            <SocialIconsLink
              href="https://twitter.com/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconsLink>
            <SocialIconsLink
              href="https://www.linkedin.com/in/reduan-s-405a1b204"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </SocialIconsLink>
            <SocialIconsLink
              href="https://www.youtube.com/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconsLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
