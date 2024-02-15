import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import PeopleLeft from "../assets/images/people-left.png";
import { RiTwitterXFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  let currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <div className="logo">
        <img src={PeopleLeft} alt="Company Logo" />
        <h1>TEENAGERS TRANSLATED</h1>
      </div>

      <div className="quick">Quick Links:</div>
      <div className="footer-links">
        <Link to="/about">About Us</Link>
        <Link to="/parentWork">Parent Work</Link>
        <Link to="/schoolWork">School Work</Link>
        <Link to="/coaching">1:1 Coaching</Link>
        <Link to="/ourBook">Our Book</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="icons">
        <a href="https://twitter.com/teenstranslated">
          <RiTwitterXFill />
        </a>
        <a href="https://www.facebook.com/teenagerstranslated/">
          <FiFacebook />
        </a>
        <a href="">
          <FiInstagram />
        </a>
      </div>

      <div className="line"></div>

      <div className="copyright">
        ©TeenagersTranslated 2010 - {currentYear}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
