import React from "react";
import { Link } from "react-router-dom";
import ParentImage from "../../images/Illustrations/ParentFINAL.png";
import "./ParentWorkPage.css";

const ParentWorkPage = () => {
  return (
    <div>
      <section className="parent-purple">
        <h1>Parent Work</h1>
        <div className="container about-back">
          <div className="header parent-work">
            <p>
              Aimed at improving family mental health &wellbeing, our parent
              inputs focus on what is behind the often challenging emotional and
              behavioural changes in teens from around the age of 10. We help
              parents develop a better understanding of what they can expect
              from ‘normal’ teenage behaviour, and what points to more worrying
              signs. <br />
              <br /> Adolescent mental health stats make troubling reading.
              Symptoms like panic attacks, angry outbursts, stress and
              depressive behaviour are evident in about 1 in year6 children aged
              7-16 years, rising to 1 in 4 of those aged 17-19 years. <br />
              <br />
              Our Talks look at anxiety, which is often at the root of these
              behaviours, and provide parents with tools to help them support
              their teens in managing this. Once these and other issues like
              self-harm, eating disorders, screen dependency or other addictive
              tendencies become established ways of coping with emotional
              turbulence, they are difficult to reverse without professional
              intervention.
              <br />
              <br />
              The Talks also help parents to understand the developing,
              vulnerable teen brain and provide simple psychological tips and
              practical strategies designed to help parents keep lines of
              communication open and to proactively support their teens mental
              health.
              <br />
              <br />
              The parent/teen relationship is key to supporting a child to learn
              how to cope with the inevitable pressures and stresses they face
              whilst growing up, and to help them to manage tech use and
              internet access. Home life can provide the conditions in which
              children can cultivate their own innate and secure sense of self,
              whilst developing strategies to help regulate their emotions in
              beneficial ways, build mental resilience, and navigate their
              virtual worlds.
              <br />
              <br />
              Our Talks are offered in various formats and settings
            </p>
            <div className="buttons">
              <Link to="/ParentLunch">
                <div className="btn-xlarge">
                  Lunchtime Talks in the Workplace
                </div>
              </Link>
              <Link to="/ParentTalks">
                <div className="btn-large">Parent Talks in Schools</div>
              </Link>
              <Link to="/ParentCharity">
                <div className="btn-medium">Charity Talks</div>
              </Link>
              <img
                className="parent-image"
                src={ParentImage}
                alt="ParentImage"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentWorkPage;
