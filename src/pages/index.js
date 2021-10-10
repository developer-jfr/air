import React, { useState } from "react";
import { Route } from "react-router-dom";

import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

import Footer from "./../components/Footer/index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />

      <Footer />
    </>
  );
};

export default Home;
