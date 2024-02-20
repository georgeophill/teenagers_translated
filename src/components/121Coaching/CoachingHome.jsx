import React from "react";
import "./121CoachingHome.css";
import CoachingImage from "../../images/Illustrations/121Coaching.png";
import { Link } from "react-router-dom";

const CoachingHome = () => {
  return (
    <section id="coaching-section">
      <div className="CoachingWorkHome">
        <div className="CoachingWorkHome__left">
          <img
            src={CoachingImage}
            alt="Coaching Work"
            className="CoachingHome__image"
          />
        </div>
        <div className="CoachingWorkHome__right">
          <h1 className="CoachingWorkHome__header">One-to-One Coaching</h1>
          <p className="CoachingWorkHome__quote">
            Sometimes a more personalised approach is required for which we
            offer one-to-one support for parents as well as teens
          </p>
          <Link to="/Coaching">
            <button className="btn-xlcool" id="button-coaching">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachingHome;
