import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CoachingParents.css";
import CoachingImage from "../../images/Illustrations/121Coaching.png";
import { CoachingParentsFeedback } from "../../data";
import RollingBar from "../../components/RollingBar";

const CoachingParents = () => {
  const location = useLocation();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const galleryLength = 27;

  // Function to switch to the next quote
  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === CoachingParentsFeedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Use setTimeout to change the quote every 10 seconds
    const timer = setInterval(nextQuote, 10000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentQuote = CoachingParentsFeedback[currentQuoteIndex].quote;
  const currentPersonIndex = currentQuoteIndex;
  const currentPerson = CoachingParentsFeedback[currentPersonIndex].person;

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
            In the privacy of a one-to-one space, many parents find it easier to
            address areas of concern in an open and candid way. If you are
            dealing with difficult behaviour, or struggling to respond
            appropriately to attitudes like rebelliousness, low motivation, or
            anxiety, a few individual sessions can help you acquire the
            understanding and skills to deal more effectively with your teens
            and pre-teens.
            <br />
            <br />
            Parent responses can play a vital role during adolescence and small
            changes in how you react, communicate and offer support can have a
            transformative impact on how your child responds.
            <br />
            <br />
            The sessions are conducted in a coaching style, and provide an
            opportunity for a more targeted approach responsive to your specific
            needs. The 1-1 format allows us to understand more clearly the
            issues and behaviours relevant to your situation, so that we can
            offer tailored solutions focused on your areas of concern. By
            sharing information, concepts, and strategies, we help you identify
            effective ways of dealing with the issues you are facing, so that
            you can develop a better understanding of how best to support your
            child.
            <br />
            <br />
            Sessions take place on zoom and normally about 4 appointments is
            sufficient to make progress. Some parents elect to have more
            meetings, but this is not essential. Appointments are 60 or 90mins,
            depending on the issues, and we can advise on this. Please contact
            us to arrange an initial 30 minute zoom session (free of charge) to
            discuss your needs.
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
          <p className="speech-bubble-text-talk-student">
            "{currentQuote}"<br />
            {currentPerson}
          </p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default CoachingParents;
