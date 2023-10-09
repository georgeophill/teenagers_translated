// Home.jsx

import React from "react";
import "./Home.css";
import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import RollingBar from "../../components/RollingBar";

const Home = () => {
  const galleryLength = 27;

  return (
    <div>
      <Header />
      <AboutUs />
      <RollingBar galleryLength={galleryLength} />
    </div>
  );
};

export default Home;
