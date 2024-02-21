import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ParentLunchPage.css";
import RollingBar from "../../components/RollingBar";

const ParentLunchPage = () => {
  const location = useLocation();
  const galleryLength = 27;

  return (
    <section className="parent-lunch-section" id="parent-lunch-section">
      <div className="lunch-buttons">
        <Link
          to="/ParentAboutTalks"
          className={`btn-cool ${
            location.pathname === "/ParentAboutTalks" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          About The Talks
        </Link>
        <Link
          to="/parentTalks"
          className={`btn-cool ${
            location.pathname === "/parentTalks" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          School Talks
        </Link>
        <Link
          to="/parentLunch"
          className={`btn-cool ${
            location.pathname === "/parentLunch" ? "active" : ""
          }`}
          id="make-smaller-btn"
        >
          Workplace Talks
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
      <h1 className="h1-parentlunch">About The Talks</h1>
      <div className="container about-back">
        <div className="header parent-work">
          <p>
            We help parents develop a better understanding of what they can
            expect from ‘normal’ teenage behaviour, and what points to more
            worrying signs. Adolescent mental health stats make troubling
            reading. Symptoms like panic attacks, angry outbursts, stress and
            depressive behaviour are evident in about 1 in 6 children aged 7-16
            years, rising to 1 in 4 of those aged 17-19 years.
            <br />
            <br /> Our Talks look at the emotional drivers at the root of these
            behaviours, and provide parents with tools to help them support
            their teens in managing emotions, like anxiety. Once issues like
            self-harm, eating disorders, screen dependency or other addictive
            tendencies become established ways of coping with emotional
            turbulence, they are difficult to reverse without professional
            intervention. <br />
            <br />
            The Talks also help parents to understand the developing, vulnerable
            teen brain and provide simple psychological tips and practical
            strategies designed to help parents keep lines of communication open
            and to proactively support their teens mental health.
            <br />
            <br />
            The parent/teen relationship is key to supporting a child to learn
            how to cope with the inevitable pressures and stresses they face
            whilst growing up, and to help them to manage tech use and internet
            access. Home life can provide the conditions in which children can
            cultivate their own innate and secure sense of self, whilst
            developing strategies to help regulate their emotions in beneficial
            ways, build mental resilience, and navigate their virtual worlds.
            <br />
            <br />
            Our Talks are offered in the Workplace, in Schools & for Charity
            fundraisers
          </p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default ParentLunchPage;
