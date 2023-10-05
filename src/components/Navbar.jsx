import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import PeopleLeft from "../assets/images/people-left.png";
import PeopleRight from "../assets/images/people-right.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 1440);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__top">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo">
            <img src={PeopleLeft} alt="logo" />
          </Link>
        </div>
        <div className="navbar__center">
          <div className="navbar__item">
            <Link to="/" className="navbar__link">
              Teenagers Translated
            </Link>
          </div>
          <div className="navbar__subtitle">
            Smoothly Navigate The Teenage Years
          </div>
        </div>
        <div className="navbar__right">
          {isResponsive ? (
            /* Hamburger icon for mobile */
            <div className="hamburger-icon">&#9776;</div>
          ) : (
            /* Right image for larger screens */
            <Link to="/" className="navbar__logo">
              <img src={PeopleRight} alt="logo" />
            </Link>
          )}
        </div>
      </div>
      <div className="navbar__bottom">
        <Link to="/" className="navbar__link__btn">
          Home
        </Link>
        <Link to="/about" className="navbar__link__btn">
          About
        </Link>
        <div className="navbar__link_btn dropdown">
          <span className="dropdown-title">
            <Link to="/parentWork" className="navbar__link__btn">
              Parent Work
            </Link>
          </span>
          <div className="dropdown-content">
            <Link to="/parentTalks">Parent Talks In School</Link>
            <Link to="/parentWorkshops">Parent Workshops</Link>
            <Link to="/parentCoaching">Parent Coaching</Link>
          </div>
        </div>
        <div className="navbar__link_btn dropdown">
          <span>
            <Link to="/schoolWork" className="navbar__link__btn">
              School Work
            </Link>
          </span>
          <div className="dropdown-content">
            <Link to="/studentWork">Student Work - How PSHE Sessions Work</Link>
            <Link to="/staffInputs">Staff Inputs</Link>
            <Link to="/schoolCulture">
              Creating a Culture of wellbeing & Good Mental Health
            </Link>
          </div>
        </div>
        <div className="navbar__link_btn dropdown">
          <span>
            <Link to="/coaching" className="navbar__link__btn">
              1-2-1 Coaching
            </Link>
          </span>
          <div className="dropdown-content">
            <Link to="/coachingForParents">Coaching For Parents</Link>
            <Link to="/coachingForTeenagers">Coaching For Teenagers </Link>
          </div>
        </div>
        <Link to="/ourBook" className="navbar__link__btn">
          Our Book
        </Link>
        <Link to="/resources" className="navbar__link__btn">
          Resources
        </Link>
        <Link to="/contact" className="navbar__link__btn">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
