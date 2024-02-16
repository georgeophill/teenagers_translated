import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import MainImage from "../images/Illustrations/HomepageFINAL.png";
import { Link } from "react-router-dom";

const Header = () => {
  const initialText =
    "Since 2009, Janey & Naella have been promoting good mental health, wellbeing and healthy child development through their Teenagers Translated training programmes.  These have been delivered to 1000s of parents, staff & students in over 50 schools in the UK & overseas.  ";

  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const charIndexRef = useRef(0);
  const typingTimerRef = useRef(null);

  const typeText = () => {
    const charIndex = charIndexRef.current;
    if (charIndex < initialText.length) {
      setTypedText((prevText) => prevText + initialText.charAt(charIndex));
      charIndexRef.current = charIndex + 1;
      typingTimerRef.current = setTimeout(typeText, 40); // Adjust typing speed as needed
    } else {
      setIsTyping(false); // Typing is complete
    }
  };

  useEffect(() => {
    typeText();
    return () => {
      clearTimeout(typingTimerRef.current);
    };
  });

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__text" id="main-strapline">
            <h2>
              {typedText}
              {isTyping}
            </h2>
            <Link to="/about">
              <button className="btn-small" id="about-btn">
                Read more about Janey & Naella
              </button>
            </Link>
          </div>
          <div className="header__image">
            <img src={MainImage} alt="Teenagers" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
