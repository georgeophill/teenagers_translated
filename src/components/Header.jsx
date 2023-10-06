import React from "react";
import "./Header.css";
import MainImage from "../images/HomepageFINAL.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__text" id="main-strapline">
            <h3>
              Since 2009, Teenagers Translated has been helping parents,
              teenagers and school staff to manage the turbulent teenage years,
              promoting wellbeing & healthy child development, and preventing
              mental health decline
            </h3>
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
