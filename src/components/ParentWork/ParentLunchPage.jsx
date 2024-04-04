import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ParentLunchPage.css";
import RollingBar from "../../components/RollingBar";

const ParentLunchPage = () => {
  const location = useLocation();
  const galleryLength = 27;

  return (
    <section className="parent-lunch-section" id="parent-lunch-section">
      <div className="lunch-buttons">
        <Link
          to="/ParentAboutTalks"
          className={`btn-cool ${
            location.pathname === "/ParentAboutTalks" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          About Talks
        </Link>
        <Link
          to="/parentLunch"
          className={`btn-cool ${
            location.pathname === "/parentLunch" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          Workplace Talks
        </Link>
        <Link
          to="/parentTalks"
          className={`btn-cool ${
            location.pathname === "/parentTalks" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          School Talks
        </Link>
        <Link
          to="/parentCharity"
          className={`btn-cool ${
            location.pathname === "/parentCharity" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          Charity Talks
        </Link>
      </div>
      {/* <h1 className="h1-parentlunch">Workplace Talks</h1> */}
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            Our Workplace talks distil the most important content into a format
            of 60-75min (with Q&A). They are targeted at HR depts in
            organisations that are keen to look after their employees’ mental
            health by offering them access to up-to-date information to support
            wellbeing in the workplace and with their families. The talks help
            parents to achieve a better work/life balance during their
            children’s teenage years, and are full of practical strategies to
            support family wellbeing.
            <br />
            <br /> Smaller groups of 20-30 participants are ideal for this
            format and setting, and talks can be conducted in the morning just
            before the start of the working day, or at lunchtime. <br />
            <br />
            Depending on your requirements and delivery day, the fee for these
            talks is in the region of £500.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default ParentLunchPage;
