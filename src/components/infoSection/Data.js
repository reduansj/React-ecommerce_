import imgUrl_1 from "../../Assets/Images/About.svg";
import imgUrl_2 from "../../Assets/Images/Discover.svg";
import imgUrl_3 from "../../Assets/Images/Services.svg";

export const sectionData = [
  {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Shoes",
    headline: "Trade your shoes with total security",
    description:
      "Get access to our exclusive and limited shoes, we have the best prices.",
    buttonLabel: "Get started",
    linkTo: "/category/products",
    imgStart: false,
    img: imgUrl_1,
    alt: "Nike Liberty",
    dark: true,
    primary: true,
    darkText: false,
  },
  {
    id: "premium",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Exclusive Nike Shoes",
    headline: "PREMIUM MEMBERSHIP",
    description:
      "Start your premium membership and you will get access to a lot of benefits, like exclusive shoes and discounts.",
    buttonLabel: "Learn More",
    linkTo: "/",
    imgStart: true,
    img: imgUrl_2,
    alt: "Nike Drawing",
    dark: false,
    primary: false,
    darkText: true,
  },
];
