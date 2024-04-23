import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CoachingPage.css";
import CoachingImage from "../../images/Illustrations/121Coaching1.png";
import { SchoolStudentFeedback } from "../../data";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const CoachingPage = () => {
  const location = useLocation();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

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
      {/* <h1 className="h1-SchoolWellbeing">1-2-1 Coaching</h1> */}
      <div className="container about-back">
        <div className="header" id="coaching-page">
          <p>
            In the privacy of a one-to-one space, many parents and teenagers
            find it easier to address specific areas of concern in an open and
            candid way.
            <br />
            <div className="talk-buttons">
              <Link
                to="/CoachingForParents"
                className={`btn-xlarge ${
                  location.pathname === "/coachingForParents" ? "active" : ""
                }`}
                id="make-smaller-btn-coaching"
              >
                For Parents
              </Link>
              <Link
                to="/CoachingForTeenagers"
                className={`btn-xlarge ${
                  location.pathname === "/coachingForTeenagers" ? "active" : ""
                }`}
                id="make-smaller-btn-coaching"
              >
                For Teenagers
              </Link>
            </div>
            <br />
            {/* The sessions are conducted on zoom in a coaching style, and provide
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
            <br />
            <br />
            Our individual sessions with teens are designed to help them develop
            the knowledge and practical skills to help boost their mental
            health, regulate their emotions without huge ups and downs, manage
            anxiety and daily stresses (eg exams, friends, social media) and
            develop a more positive mindset. */}
          </p>
        </div>
        <div className="school-image">
          <img className="image" src={CoachingImage} alt="ParentImage" />
        </div>
        <div className="feedback">
          <div className="speech-bubble-container-talk-student">
            <p className="speech-bubble-text-talk-student">
              <RiDoubleQuotesL className="quote-icon" />
              {currentQuote}
              <RiDoubleQuotesR className="quote-icon" />
            </p>
          </div>
        </div>
      </div>
      {/* <h1 className="h1-parenttalk">What people have said about us</h1> */}
    </section>
  );
};

export default CoachingPage;
