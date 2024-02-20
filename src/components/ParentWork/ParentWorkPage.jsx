import React from "react";
import { Link } from "react-router-dom";
import ParentImage from "../../images/Illustrations/ParentFINAL1.png";
import "./ParentWorkPage.css";
import { ParentTalkFeedback } from "../../data";
import { useState, useEffect } from "react";

const ParentWorkPage = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Function to switch to the next quote
  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === ParentTalkFeedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Use setTimeout to change the quote every 10 seconds
    const timer = setInterval(nextQuote, 10000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentQuote = ParentTalkFeedback[currentQuoteIndex].quote;
  return (
    <div>
      <section className="parent-purple">
        <h1>Parent Work</h1>
        <div className="container about-back" id="parent-container">
          <div className="header parent-work">
            <p>
              Aimed at improving family mental health & wellbeing, our parent
              inputs focus on challenging emotional and behavioural changes in
              pre-teens and teenagers, providing skills and tips to smoothly
              navigate this period
              <br />
            </p>
            <div className="buttons">
              <Link to="/parentAboutTalks">
                <div className="btn-xlarge">About The Talks</div>
              </Link>
              <Link to="/ParentLunch">
                <div className="btn-xlarge">Workplace Talks</div>
              </Link>
              <Link to="/ParentTalks">
                <div className="btn-xlarge">School Talks</div>
              </Link>
              <Link to="/ParentCharity">
                <div className="btn-xlarge">Charity Talks</div>
              </Link>
            </div>
            <div>
              <img
                className="parent-image"
                src={ParentImage}
                alt="ParentImage"
              />
            </div>
          </div>
        </div>
        <div className="feedback">
          <div className="speech-bubble-container-parentTalk">
            <p className="speech-bubble-text-talk">"{currentQuote}"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentWorkPage;
