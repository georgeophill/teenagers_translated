import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CoachingParents.css";

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
      {/* <h1 className="h1-SchoolWellbeing">One-to-One Sessions for Parents</h1> */}
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
            The sessions are conducted on zoom in a coaching style, and provide
            an opportunity for a more targeted approach responsive to your
            specific needs. The 1-1 format allows us to understand more clearly
            the issues and behaviours relevant to your situation, so that we can
            offer tailored solutions focused on your areas of concern. By
            sharing information, concepts, and strategies, we help you identify
            effective ways of dealing with the issues that you or your teenager
            are facing, so that you can develop a better understanding of how to
            make positive changes.
            <br />
            <br />
            As a parent, whether you are dealing with difficult behaviour, or
            struggling to respond appropriately to attitudes like
            rebelliousness, low motivation, or anxiety, a few individual
            sessions can help you acquire the understanding and skills to deal
            more effectively with your teens and pre-teens. Parent responses can
            play a vital role during adolescence and small changes in how you
            react, communicate and offer support can have a transformative
            impact on how your child responds.
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
