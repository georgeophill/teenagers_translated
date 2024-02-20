import React from "react";
import { Link } from "react-router-dom";
import SchoolImage from "../../images/Illustrations/SchoolsFINAL.png";
import "./SchoolWorkPage.css";
import { ParentTalkFeedback } from "../../data";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { useState, useEffect } from "react";

const SchoolWorkPage = () => {
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
      <section className="school-purple">
        <h1 className="h1-schoolwork">School Work</h1>
        <div className="container about-back">
          <div className="header school-work">
            <p>
              <RiDoubleQuotesL className="quotes" />
              We support students and staff to build an awareness and
              understanding of how pre-teens and teens manage themselves more
              effectively and confidently as they become independent young
              people
              <RiDoubleQuotesR className="quotes" />
              <br />
              <br />
            </p>
            <div className="buttons-school">
              <Link to="/StudentWork">
                <div className="btn-xlarge">Student Work</div>
              </Link>
              <Link to="/SchoolCulture">
                <div className="btn-xlarge">Wellbeing & Mental Health</div>
              </Link>
              <Link to="/StaffInputs">
                <div className="btn-xlarge">Staff Inputs</div>
              </Link>
            </div>
            <div className="school-image">
              <img className="image" src={SchoolImage} alt="ParentImage" />
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

export default SchoolWorkPage;
