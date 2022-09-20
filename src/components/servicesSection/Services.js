import React from "react";
import Icon1 from "../../Assets/Images/Buy.svg";
import Icon2 from "../../Assets/Images/Sell.svg";
import Icon3 from "../../Assets/Images/Trade.svg";
import {
  ServicesContainer,
  ServicesH2,
  ServicesCard,
  ServicesIcon,
  ServicesH3,
  ServicesP,
  ServicesWrapper,
  ServicesCardText,
} from "./Services.styled";
const Services = () => {
  return (
    <>
      <ServicesContainer id={"services"}>
        <ServicesH2>Our Services</ServicesH2>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesCardText>
              <ServicesH3>BUY</ServicesH3>
              <ServicesP>
                We have the rarest Nike sneakers, you will find unlimited and
                exclusive shoes.
              </ServicesP>
            </ServicesCardText>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesCardText>
              <ServicesH3>SELL</ServicesH3>
              <ServicesP>
                We buy new and used shoes directly from you. We match or beat
                offers from any shop 99% of the time. Please email or call to
                inquire.
              </ServicesP>
            </ServicesCardText>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesCardText>
              <ServicesH3>TRADE</ServicesH3>
              <ServicesP>
                Unlike most shops, we are open to trade offers in-store. Not
                local? No problem. Mail in your shoes for online store credit.
              </ServicesP>
            </ServicesCardText>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
