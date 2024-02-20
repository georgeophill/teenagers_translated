import React from "react";
import "./ParentWorkHome.css";
import ParentImage from "../../images/Illustrations/ParentFINAL.png";
import { Link } from "react-router-dom";

const ParentWorkHome = () => {
  return (
    <section id="parent-section">
      <div className="ParentWorkHome">
        <div className="ParentWorkHome__left">
          <img
            src={ParentImage}
            alt="Parent Work"
            className="ParentWorkHome__image"
          />
          <Link to="/ParentWork">
            <button className="btn-xlcool" id="button-parent">
              Read more about our courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParentWorkHome;
