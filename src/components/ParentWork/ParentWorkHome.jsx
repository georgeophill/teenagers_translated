import React from "react";
import "./ParentWorkHome.css";
import ParentImage from "../../images/Illustrations/ParentFINAL.png";
import { Link } from "react-router-dom";

const ParentWorkHome = () => {
  return (
    <div className="section">
      <div className="ParentWorkHome">
        <div className="ParentWorkHome__left">
          <img
            src={ParentImage}
            alt="Parent Work"
            className="ParentWorkHome__image"
          />
        </div>
        <div className="ParentWorkHome__right">
          <h1 className="ParentWorkHome__header">Parent Work</h1>
          <p className="ParentWorkHome__quote">
            We aim to empower parents with strategies that enable them to
            maintain a nurturing and stable home environment through the
            inevitable ups and downs of the teenage years.
          </p>
          <Link to="/ParentWork">
            <button className="btn-xlcool" id="button">
              Read more about our courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParentWorkHome;
