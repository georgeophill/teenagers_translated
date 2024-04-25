import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SchoolWellbeingPage.css";
import RollingBar from "../../components/RollingBar";

const SchoolWellbeingPage = () => {
  const location = useLocation();
  const galleryLength = 27;

  return (
    <section className="parent-talk-section" id="parent-talk-section">
      {/* <h1 className="h1-SchoolWellbeing">
        What does a culture of Wellbeing and good Mental Health mean for
        Schools?
      </h1> */}
      <div className="container about-back">
        <div className="header parent-work">
          <div className="talk-buttons">
            <Link
              to="/StudentWork"
              className={`btn-cool ${
                location.pathname === "/StudentWork" ? "active" : ""
              }`}
              id="make-smaller-btn"
            >
              Student PSHE
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
            <Link
              to="/SchoolCulture"
              className={`btn-cool ${
                location.pathname === "/SchoolCulture" ? "active" : ""
              }`}
              id="make-smaller-btn"
            >
              Wellbeing Culture
            </Link>
          </div>
          <p>
            The Mental Health (MH) of Children and Young People in England
            survey (2022) found 1:6 of children aged 7-16 yrs to have a probable
            MH disorder (same as 2020), however rates among young people aged
            17–19 have now risen to 1:4 (over 25%). Public Health England
            suggest that schools which adopt a preventative approach by
            promoting health and wellbeing (WB), experience improvement across
            all areas of school life including behaviour, attendance, results
            and motivation.
            <br />
            <br /> A school’s climate or culture is, according to Ofsted, a
            predominant factor of a child’s physical and mental health. The
            whole school experience (including extra curricula provision) and
            the quality of PSHE are cornerstones of wellbeing. There is a strong
            correlation between the quality of a school’s PSHE & social
            emotional (SE) learning and a school’s overall effectiveness, with
            high SE abilities evidencing a more significant determinant of
            academic attainment than IQ.
            <br />
            <br />
            MHWB is assessed by Ofsted under Personal Development. Evidence is
            sought that a school’s chosen programme is building student
            resilience, confidence, independence and skills to keep every child
            mentally healthy. A PSHE programme which includes social emotional
            learning (SEL) will help students learn how to regulate emotions,
            maintain good relationships and develop effective communication
            skills. Programmes which are systematically delivered in
            age-appropriate ways over 5 years are considered a more effective
            way to prevent MH decline or risky behaviours, than one-off inputs
            or lectures focusing on mental ill-health problems, weaknesses or
            important topics. These may tick boxes but fail to provide
            practical, healthy coping strategies enabling students to leave
            school socially, emotionally, cognitively and psychologically
            competent and prepared for adult life so that they can avoid
            declining mental health from age 17 – 19, evident in recent
            statistics.
            <br />
            <br />
            A combination of relevant, up-to-date information and opportunities
            for reflective group discussion helps students to incrementally
            build an understanding of the sorts of things/activities that are –
            and are not – beneficial or helpful to them in the longer term.
            Through this knowledge they can gradually build their own Tool Kit
            of strategies and establish resilience skills to help to relieve
            tension and boost mood in proactive and positive ways.
            <br />
            <br />
            A whole school wellbeing survey - for all stakeholders – helps
            schools and MATs to assess both what is working well and which areas
            require focussed attention. This information can help schools to
            assess their needs and refine their approach not just for quality
            PSHE provision, but also targeted support for vulnerable and SEN
            students & families. Many schools opt for proactive individual
            coaching/counselling to prevent mental health decline (often
            exacerbated by waiting for CAMHS appointments) and a service which
            provides parents & staff with information and on-going support
            suggestions.
            <br />
            <br />
            Using our experience of over a decade of working in schools, we can
            help you to assess the needs of your school and assist in refining
            an approach that includes quality PSHE provision, alongside targeted
            support for vulnerable and SEN students, proactive individual
            coaching/counselling for the prevention and deterioration of mental
            health and parent / staff information and support suggestions.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default SchoolWellbeingPage;
