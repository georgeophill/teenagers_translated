import React from "react";
import "./Header.css";
import MainImage from "../images/Illustrations/HomepageTextJPEG.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__image">
            <img src={MainImage} alt="Teenagers" />
            <Link to="/about">
              <button className="btn-homepage" id="about-btn">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
