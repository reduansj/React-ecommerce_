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
  ArrowForward,
  ArrowRight,
} from "./Home.styled";
import { useState } from "react";
const Home = () => {
  return (
    <>
      <Section background={"transparent"} direction={"column"}>
        <VideoWrapper>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </VideoWrapper>
        <SectionContent>
          <H2>BUY SELL TRADE AUTHENTIC NIKE SHOES</H2>
          <Paragraph>
            Sign up for a new account and find your dream shoes.
          </Paragraph>
          <BtnWrapper>
            <Button to="/" primary="true" dark="true">
              Get Started
            </Button>
          </BtnWrapper>
        </SectionContent>
      </Section>
      <Section id="about" background={"white"} direction={"row"}></Section>
      <Section id="premium" background={"white"} direction={"row"}>
        <div>home</div>
        <div>home</div>
      </Section>
      <Section id="services" background={"black"} direction={"row"}>
        <H2>Our Services</H2>
      </Section>
      <Section id="release" background={"white"} direction={"row"}>
        <div>home</div>
        <div>home</div>
      </Section>
    </>
  );
};

export default Home;
