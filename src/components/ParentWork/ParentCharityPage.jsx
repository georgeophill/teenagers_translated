import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ParentCharityPage.css";
import { ParentCharityFeedback } from "../../data";
import RollingBar from "../../components/RollingBar";

const ParentCharityPage = () => {
  const location = useLocation();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const galleryLength = 27;

  // Function to switch to the next quote
  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === ParentCharityFeedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Use setTimeout to change the quote every 10 seconds
    const timer = setInterval(nextQuote, 10000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentQuote = ParentCharityFeedback[currentQuoteIndex].quote;

  return (
    <section className="parent-lunch-section" id="parent-lunch-section">
      <div className="lunch-buttons">
        <Link
          to="/parentTalks"
          className={`btn-cool ${
            location.pathname === "/parentTalks" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          Parent Talks in Schools
        </Link>
        <Link
          to="/parentLunch"
          className={`btn-cool ${
            location.pathname === "/parentLunch" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          Lunchtime Talks in the Workplace
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
      <h1 className="h1-parentlunch">Charity Talks in the Workplace</h1>
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            Organisations, businesses, conferences or groups of individuals (NOT
            SCHOOLS) can host a Teenagers Translated event to raise funds for a
            charity of their choice. This can either be a talk of 60-90 minutes,
            or a longer workshop of 3-4 hours.
            <br />
            <br /> There is no fee for these events. <br /> <br />
          </p>
        </div>
      </div>
      <h1 className="h1-parentlunch">What people have said about us</h1>
      <div className="feedback">
        <div className="speech-bubble-container-charity">
          <p className="speech-bubble-text-charity">"{currentQuote}"</p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default ParentCharityPage;
