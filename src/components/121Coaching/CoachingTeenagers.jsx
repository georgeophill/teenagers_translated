import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CoachingTeenagers.css";
import CoachingImage from "../../images/Illustrations/121Coaching.png";
import { CoachingTeenagersFeedback } from "../../data";
import RollingBar from "../../components/RollingBar";

const CoachingTeenagers = () => {
  const location = useLocation();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const galleryLength = 27;

  // Function to switch to the next quote
  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === CoachingTeenagersFeedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Use setTimeout to change the quote every 10 seconds
    const timer = setInterval(nextQuote, 10000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentQuote = CoachingTeenagersFeedback[currentQuoteIndex].quote;

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
      <h1 className="h1-SchoolWellbeing">One-to-one Sessions for Teenagers</h1>
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            Individual coaching sessions for teenagers focus overall on helping
            teens to develop the knowledge and practical skills to help boost
            their mental health, regulate their emotions without acute
            oscillations, manage anxiety and daily stresses (eg exams, friends,
            social media) and develop a more positive mindset. We start by
            discussing the areas that are worrying you, and tailor your child’s
            sessions to target and improve the problems. Teenagers usually find
            the sessions relevant and helpful, and attend willingly. Feedback
            and outcomes are very good.
            <br />
            <br />
            <div style={{ fontStyle: "italic" }}>
              Sessions are 60mins and take place on zoom. Normally, 4-6
              appointments are needed to see changes. Please contact us to
              arrange an initial 30 min zoom call (free of charge) to discuss
              your requirements.
            </div>
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

export default CoachingTeenagers;
