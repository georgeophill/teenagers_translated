// Home.jsx

import React from "react";
import "./Home.css";
import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import RollingBar from "../../components/RollingBar";
import ParentWorkHome from "../../components/ParentWork/ParentWorkHome";

const Home = () => {
  const galleryLength = 27;

  return (
    <div>
      <Header />
      <AboutUs />
      <RollingBar galleryLength={galleryLength} />
      <ParentWorkHome />
    </div>
  );
};

export default Home;
