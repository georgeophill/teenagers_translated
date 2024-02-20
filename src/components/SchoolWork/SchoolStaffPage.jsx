import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SchoolStaffPage.css";
import RollingBar from "../../components/RollingBar";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

const SchoolStaffPage = () => {
  const location = useLocation();
  const [showAdditionalText, setShowAdditionalText] = useState(false);
  const [isArrowDown, setIsArrowDown] = useState(true);
  const galleryLength = 27;

  const toggleAdditionalText = () => {
    setShowAdditionalText(!showAdditionalText);
    setIsArrowDown(!isArrowDown);
  };

  return (
    <section className="parent-talk-section" id="parent-talk-section">
      <div className="talk-buttons">
        <Link
          to="/StudentWork"
          className={`btn-cool ${
            location.pathname === "/StudentWork" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          Student Work
        </Link>
        <Link
          to="/SchoolCulture"
          className={`btn-cool ${
            location.pathname === "/SchoolCulture" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          Wellbeing & Mental Health
        </Link>
        <Link
          to="/StaffInputs"
          className={`btn-cool ${
            location.pathname === "/StaffInputs" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          Staff Inputs
        </Link>
      </div>
      <h1 className="h1-parenttalk">Staff Inputs</h1>
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            Drawing on our experience of designing and delivering staff inputs
            in schools, we can help you design short insets which can be
            delivered to your staff by your own pastoral team. Working with your
            pastoral Lead to understand the needs of your school, we will craft
            an appropriate presentation tailored to your requirements.
            <br />
            <br />
            <button
              className="btn-xlcool"
              id="example-button"
              onClick={toggleAdditionalText}
            >
              Outline examples of insets
              {isArrowDown ? (
                <FiArrowDown className="down-arrow" />
              ) : (
                <FiArrowUp className="down-arrow" />
              )}
            </button>
            {showAdditionalText && (
              <div className="additional-text">
                <br />
                <h2>
                  (a) Helping staff to support good mental health in teens
                </h2>
                <p>
                  This focuses on the spectrum of behaviours from the relatively
                  minor at one end (rudeness, low level aggression, sulking) to
                  much more troubling expressions like self-harm & eating
                  disorders. The content looks at how these result from varying
                  degrees of inability to cope with emotional dissonance, and
                  explores the kinds of adult interventions that can help
                  pre-teens and teens to manage low grade problems. In addition,
                  the material helps staff identify when potential problems
                  might be gathering pace, how to support this at an early
                  stage, and to accurately assess when referral to mental health
                  professionals is indicated.
                  <br />
                  <br />
                  The content includes:
                  <br />
                  <br />
                  <ul className="helping-staff-list">
                    <li>
                      • what constitutes good mental health, and ill-health
                    </li>
                    <br />
                    <li>
                      • how to recognise and distinguish between both states
                    </li>
                    <br />
                    <li>
                      • helpful and unhelpful ways of responding to a child’s
                      distress
                    </li>
                    <br />
                    <li>
                      • some strategies as well as Do’s and Don’ts to create a
                      supportive environment and promote mental wellbeing in
                      children
                    </li>
                  </ul>
                </p>
                <br />
                <br />
                <h2>
                  (b) The impact of the changing teenage brain on mental health
                </h2>
                <p>
                  This draws on developments within the fields of neuroscience,
                  psychology and neurobiology which offer new insights to
                  enhance our understanding of why teen behaviour changes, and
                  the environments and interactions most suited to achieving
                  positive behaviour and high attainment in teenagers.
                  <br />
                  <br />
                  The content includes:
                  <br />
                  <br />
                  <ul>
                    <li>
                      • the changing adolescent brain & its impact on mental
                      health behaviours
                    </li>
                    <br />
                    <li>
                      • the brain’s stress response system & how this affects
                      emotional regulation, focus & concentration
                    </li>
                    <br />
                    <li>
                      • the impact of anxiety on performance and wellbeing
                    </li>
                    <br />
                    <li>
                      • the vital role of dopamine and other biochemicals on
                      conduct and achievement
                    </li>
                  </ul>
                </p>
                <br />
                <br />
                <h2>
                  (c) Communication to manage behaviour and enhance learning
                </h2>
                <p>
                  With a focus on re-thinking communication as an effective
                  behaviour and learning management strategy, this input gives
                  participants an insight into why teenagers are so sensitive to
                  different interactive styles. Communication skills are often
                  dubbed as ‘soft’ but multi-disciplinary research studies
                  suggest that some of the most potent methods of influencing
                  teenage behaviour and learning lie in adopting the right
                  interactive styles.
                  <br />
                  <br />
                  The content addresses a variety of best-practice competences
                  to achieve observable improvements in student behaviour,
                  learning and wellbeing.
                  <br />
                  <br />
                  <ul>
                    <li>
                      • What an unsettled inner brain state looks like in terms
                      of a child’s behaviour and learning
                    </li>
                    <br />
                    <li>
                      • How adult communication (especially non-verbal) impacts
                      a child’s biochemical fluctuations, energy shifts and
                      emotional reactions, as well as their outward conduct
                    </li>
                    <br />
                    <li>
                      • The micro skills of communication best able to create a
                      receptive emotional and learning state in a child
                    </li>
                    <br />
                    <br />
                  </ul>
                </p>

                <button
                  className="btn-xlcool"
                  id="example-button"
                  onClick={toggleAdditionalText}
                >
                  Examples of PSHE content{" "}
                  {isArrowDown ? (
                    <FiArrowDown className="down-arrow" />
                  ) : (
                    <FiArrowUp className="down-arrow" />
                  )}
                </button>
              </div>
            )}
          </p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default SchoolStaffPage;
