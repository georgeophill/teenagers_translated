import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SchoolStudentPage.css";
import RollingBar from "../../components/RollingBar";
import { AiFillStar } from "react-icons/ai";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

const SchoolStudentPage = () => {
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
      <h1 className="h1-parenttalk">Student Work</h1>
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            For over 10 years, Teenagers Translated have been delivering short
            programmes (from 2 – 8 inputs) to Year 7-9 students in a range of
            independent schools, as part of their PSHE programmes. During this
            time, teen culture has undergone significant transformation
            resulting in an overhaul of safeguarding, child protection,
            behaviour, mental health and wellbeing policies and procedures to
            protect children.
            <br />
            <br /> At Teenagers Translated, we have developed a deeper
            understanding of the trends by monitoring and evolving the focus and
            learning of our student sessions so that they have remained
            relevant, informative and effective. A young person’s knowledge,
            beliefs and behaviours are moulded by their environment, both from
            their experience of school and home life. Younger and younger
            children have access to Smartphones and exposure to the Internet.
            Although access to more information can be a positive experience,
            exposure to adult content is impacting and normalising inappropriate
            behaviours in younger children before they are fully autonomous.
            <br />
            <br />
            The last 10 years have seen a significant decline in the mental
            health and wellbeing of children and young people. We believe that
            much can be done within school communities to counteract this
            worrying trend by adopting proactive and preventative programmes to
            help teenagers. Adolescence is a crucial developmental stage during
            which students need learning opportunities which offer information,
            alongside space for discussion and reflection. Undertaking this
            during the teen years when the brain is neuroplastic and undergoing
            its transformation helps to equip a teenager with vital social and
            emotional skills, a set of effective coping strategies as well as
            core values vital for their future success and wellbeing.
            <br />
            <br />
            Drawing on our considerable experience of creating and delivering
            inputs to students, we now provide a consultancy role in enhancing
            the wellbeing component of a school’s PSHE and RSE curriculum.
            <br />
            <br />
            <AiFillStar className="star" />
            <br />
            <br />
            <div className="italic">
              If your pastoral team would like to boost the Social and Emotional
              Learning areas of your existing offering, we can help you create a
              series of inputs to dovetail into your programme, and to be
              delivered by your own pastoral staff. The content incrementally
              supports the development of emotional literacy and resilience
              aptitudes that in turn boost overall mental health, academic
              achievement and performance.
            </div>
            <br />
            <AiFillStar className="star" />
            <br />
            <br />
            Our material aims to help students develop a greater understanding
            of themselves, of their reactions and choices, and to teach the
            practical skills to improve emotional and social wellbeing. By
            increasing their self-awareness, they are helped to:
            <br />
            <br />
            <ul>
              <li>
                • develop the aptitudes to recognise and regulate their emotions
                and deal with day-to-day stress/anxiety using functional
                strategies
              </li>
              <br />
              <li>
                • understand the changes in the teenage brain and the pitfalls
                of turning to the wrong coping strategies to regulate emotional
                distress
              </li>
              <br />
              <li>• enhance their empathy and social skills </li>
            </ul>
            <br />
            <br />
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
            {showAdditionalText && (
              <div className="additional-text">
                <br />
                <h2>Teenagers Translated Year 7 programme</h2> <br />
                <ul>
                  <li>
                    {" "}
                    (1) Self awareness: How different day to day situations and
                    behaviours of others (family, friends, school life, sport,
                    academics) impact each child’s feelings, thoughts and
                    behaviours.{" "}
                  </li>
                  <br />
                  <li>
                    (2) Reactions / behaviours: Identifying own default
                    behaviours (verbal and non-verbal signals) & reflect on
                    benefits of change
                  </li>
                  <br />
                  <li>
                    (3) The brain: what the stress response system is; how it is
                    triggered and why we might suddenly respond in acute ways;
                    how it links to underlying difficult feelings; and what each
                    child could do to manage pressure (of eg exams), reduce
                    reactivity (within eg. friendships) and improve their
                    self-regulation (when facing day-to-day challenges).
                  </li>
                  <br />
                  <li>
                    (4) Coping strategies: discussing functional ways of coping
                    & managing with normal ups and downs. Encouraging each child
                    to identify their own tool kit and practice self-regulation.
                  </li>
                  <br />
                  <li>
                    {" "}
                    (5) The Teen World: Understanding
                    situations/substances/activities that teens and pre-teens
                    might be exposed to; encourage each child to think about the
                    ones they are or might be drawn to; the detrimental impact
                    of these on overall wellbeing (social, emotional,
                    psychological health) & overall brain development (and
                    mental health)
                  </li>
                </ul>
                <br /> <br />
                <h2>Teenagers Translated Year 8 programme</h2>
                <br />
                <ul>
                  <li>
                    (1) Understanding Stress: working interactively using
                    examples of pressure (home & school) and how events can
                    spiral negatively. Building awareness of early warning signs
                    of “stress” in the form of worrying, disengaging,
                    deteriorating behaviour and getting into trouble &
                    overreacting to triggers to demonstrate that stress
                    manifests in different ways, for different reasons in
                    different people.{" "}
                  </li>
                  <br />
                  <li>
                    {" "}
                    (2) Managing Stress proactively: understanding stress
                    regulation both positive/healthy approaches (breathing,
                    exercise, friendship, fun, risk) and less healthy ones & why
                    they can become unhelpful (internet, social media, food,
                    substance misuse)
                  </li>
                  <br />
                  <li>
                    (3) Negativity & negative thinking: worrying, avoidance,
                    procrastination, self-sabotaging beliefs, negative
                    self-chatter, and how to reduce these destructive mental
                    habits & patterns whilst the brain is adapting and easily
                    adaptable.
                  </li>
                </ul>
                <br />
                <br />
                <h2>Teenagers Translated Year 9 programme </h2> Simple brain
                science of addiction: Focus on substances/activities that can
                easily become habit forming: drugs, alcohol, watching
                pornography, over use of social media, food issues and help each
                child develop an awareness of what they might feel drawn to, and
                the rationale behind how and why these things are damaging. The
                long term aim is to help students decide what they need to
                reduce or avoid
                <br />
                <br />
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

export default SchoolStudentPage;
