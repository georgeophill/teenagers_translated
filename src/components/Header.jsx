import React from "react";
import "./Header.css";
import MainImage from "../images/Illustrations/HomepageTextPNG.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__image">
            <img src={MainImage} alt="Teenagers" />
            <Link to="/about">
              <button className="btn-small" id="about-btn">
                Read more about Janey & Naella
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
