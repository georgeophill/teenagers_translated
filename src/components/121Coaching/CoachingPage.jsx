import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CoachingPage.css";
import CoachingImage from "../../images/Illustrations/121Coaching.png";
import { SchoolStudentFeedback } from "../../data";
import RollingBar from "../../components/RollingBar";

const CoachingPage = () => {
  const location = useLocation();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const galleryLength = 27;

  // Function to switch to the next quote
  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === SchoolStudentFeedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Use setTimeout to change the quote every 10 seconds
    const timer = setInterval(nextQuote, 10000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentQuote = SchoolStudentFeedback[currentQuoteIndex].quote;

  return (
    <section className="parent-talk-section" id="parent-talk-section">
      <div className="talk-buttons">
        <Link
          to="/CoachingForParents"
          className={`btn-cool ${
            location.pathname === "/CoachingForParents" ? "active" : ""
          }`}
          id="make-smaller-btn-coaching"
        >
          For Parents
        </Link>
        <Link
          to="/CoachingForTeenagers"
          className={`btn-cool ${
            location.pathname === "/Coaching" ? "active" : ""
          }`}
          id="make-smaller-btn-coaching"
        >
          For Teenagers
        </Link>
      </div>
      <h1 className="h1-SchoolWellbeing">1-2-1 Coaching</h1>
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            We offer one-to-one online sessions for parents of teen and pre-teen
            children, and for teenagers too.
            <br />
            <br />
          </p>
        </div>
        <div className="school-image">
          <img className="image" src={CoachingImage} alt="ParentImage" />
        </div>
      </div>
      <h1 className="h1-parenttalk">What people have said about us</h1>
      <div className="feedback">
        <div className="speech-bubble-container-talk-student">
          <p className="speech-bubble-text-talk-student">"{currentQuote}"</p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default CoachingPage;
