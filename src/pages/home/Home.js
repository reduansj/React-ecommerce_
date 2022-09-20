import Video from "../../Assets/Videos/Commercial.mp4";
import Section from "../../components/section";
import { Button } from "../../components/button/Button.styled";
import {
  VideoWrapper,
  VideoBg,
  SectionContent,
  H2,
  Paragraph,
  BtnWrapper,
} from "./Home.styled";
import { useContext } from "react";
import { AuthContext } from "../../auth/context";
import { sectionData } from "../../components/infoSection/Data";
import InfoSection from "../../components/infoSection";
import Services from "../../components/servicesSection";

const Home = () => {
  const { logged, user } = useContext(AuthContext);

  const [aboutSectionProps, premiumSectionProps, releaseSectionProps] =
    sectionData;

  return (
    <>
      <Section background={"transparent"} direction={"column"}>
        <VideoWrapper>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <SectionContent>
          <H2>BUY SELL TRADE AUTHENTIC NIKE SHOES</H2>
          {logged && (
            <Paragraph>Welcome back {user.name.toUpperCase()}</Paragraph>
          )}
          {!logged && (
            <Paragraph>
              Sign up for a new account and find your dream shoes.
            </Paragraph>
          )}
          {!logged && (
            <BtnWrapper>
              <Button to="/signIn" primary="true" dark="true">
                Get Started
              </Button>
            </BtnWrapper>
          )}
        </SectionContent>
      </Section>
      <InfoSection {...aboutSectionProps} />
      <Services />
      <InfoSection {...premiumSectionProps} />
    </>
  );
};

export default Home;
