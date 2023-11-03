// Home.jsx
import React from "react";
import "./Home.css";
import AboutUs from "../../components/AboutUs";
import Header from "../../components/Header";
import RollingBar from "../../components/RollingBar";
import ParentWorkHome from "../../components/ParentWork/ParentWorkHome";
import SchoolWorkHome from "../../components/SchoolWork/SchoolWorkHome";
import CochingHome from "../../components/121Coaching/CoachingHome";
import BookHomePage from "../../components/Book/BookHomePage";
import Resources from "../../components/Resources";

const Home = () => {
  const galleryLength = 27;

  return (
    <div>
      <Header />
      <AboutUs />
      <RollingBar galleryLength={galleryLength} />
      <ParentWorkHome />
      <SchoolWorkHome />
      <CochingHome />
      <BookHomePage />
      <Resources />
      <RollingBar galleryLength={galleryLength} />
    </div>
  );
};

export default Home;
