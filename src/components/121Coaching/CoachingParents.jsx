import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CoachingParents.css";
import CoachingImage from "../../images/Illustrations/121Coaching.png";

import RollingBar from "../../components/RollingBar";

const CoachingParents = () => {
  const location = useLocation();
  const galleryLength = 27;

  return (
    <section className="parent-talk-section" id="parent-talk-section">
      <div className="talk-buttons">
        <Link
          to="/coachingForParents"
          className={`btn-cool ${
            location.pathname === "/coachingForParents" ? "active" : ""
          }`}
          id="make-smaller-btn-coaching"
        >
          For Parents
        </Link>
        <Link
          to="/CoachingForTeenagers"
          className={`btn-cool ${
            location.pathname === "/CoachingForTeenagers" ? "active" : ""
          }`}
          id="make-smaller-btn-coaching"
        >
          For Teenagers
        </Link>
      </div>
      <h1 className="h1-SchoolWellbeing">One-to-One Sessions for Parents</h1>
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            Normally about 4 appointments is sufficient to make progress. Some
            parents elect to have more meetings, but this is not essential.
            Appointments are 60 or 90mins, depending on the issues, and we can
            advise on this. Please contact us to arrange an initial 30 minute
            zoom session (free of charge) to discuss your needs.
            <br />
            <br />
          </p>
        </div>
        {/* <div className="school-image">
          <img className="image" src={CoachingImage} alt="ParentImage" />
        </div> */}
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default CoachingParents;
