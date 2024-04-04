import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CoachingTeenagers.css";
import RollingBar from "../../components/RollingBar";

const CoachingTeenagers = () => {
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
      {/* <h1 className="h1-SchoolWellbeing">One-to-one Sessions for Teenagers</h1> */}
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            Parents usually approach us for coaching for their child so we start
            by discussing the areas that are worrying you, and tailor your
            child’s sessions to target and improve the problems. Teenagers find
            the sessions relevant and helpful, and attend willingly. Feedback
            and outcomes are very good.
            <br />
            <br />
            The sessions are designed to help teenagers develop the knowledge
            and practical skills to help boost their mental health, regulate
            their emotions without huge ups and downs, manage anxiety and daily
            stresses (eg exams, friends, social media) and develop a more
            positive mindset.
            <br />
            <br />
            <div style={{ fontStyle: "italic" }}>
              Sessions are 60mins and normally, 4-6 appointments are needed to
              see changes. Often, teenagers wish to have additional sessions,
              but this is not necessary. Please contact us to arrange an initial
              30 min zoom call (free of charge) to discuss your requirements.
            </div>
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

export default CoachingTeenagers;
