import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ParentCharityPage.css";
import RollingBar from "../../components/RollingBar";

const ParentCharityPage = () => {
  const location = useLocation();
  const galleryLength = 27;

  return (
    <section className="parent-lunch-section" id="parent-lunch-section">
      {/* <h1 className="h1-parentlunch">Charity Talks</h1> */}
      <div className="container about-back">
        <div className="header parent-work">
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
          <p>
            Organisations, businesses, conferences or groups of individuals (NOT
            SCHOOLS) can host a Teenagers Translated charity talk to raise funds
            for a charity of their choice. This can either be a talk of 60-90
            minutes, or a longer workshop of 3-4 hours.
            <br />
            <br /> There is no fee for these events. <br /> <br />
          </p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default ParentCharityPage;
