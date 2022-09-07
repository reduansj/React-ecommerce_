import React from "react";
import Navbar from "./navBar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  //Get current path
  const location = useLocation();

  const [, page] = location.pathname.split("/");
  const pathName = "/" + page;
  const links = locationToLinks[pathName] ?? [];

  return (
    <>
      <Navbar links={links} />
      {children}
      <Footer />
    </>
  );
}

const locationToLinks = {
  "/": [
    {
      text: "SHOP",
      type: "navLink",
      to: "category/products",
    },
    {
      text: "ABOUT",
      type: "scrollLink",
      to: "about",
      smooth: true,
      duration: 500,
      spy: true,
      offset: -80,
    },
    {
      text: "PREMIUM",
      type: "scrollLink",
      to: "premium",
      smooth: true,
      duration: 500,
      spy: true,
      offset: -80,
    },
    {
      text: "SERVICES",
      type: "scrollLink",
      to: "services",
      smooth: true,
      duration: 500,
      spy: true,
      offset: -80,
    },
    {
      text: "RELEASE",
      type: "scrollLink",
      to: "release",
      smooth: true,
      duration: 500,
      spy: true,
      offset: -80,
    },
  ],

  "/category": [
    {
      text: "HOME",
      type: "navLink",
      to: "/",
    },
    {
      text: "MEN",
      type: "category",
      category: "men",
    },
    {
      text: "WOMEN",
      type: "category",
      category: "women",
    },
    {
      text: "KIDS",
      type: "category",
      category: "kids",
    },
    {
      text: "NEW",
      type: "category",
      category: "new",
    },
  ],
};

export default Layout;
