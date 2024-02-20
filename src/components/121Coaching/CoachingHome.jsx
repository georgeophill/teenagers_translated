import React from "react";
import "./121CoachingHome.css";
import CoachingImage from "../../images/Illustrations/121Coaching.png";
import { Link } from "react-router-dom";

const CoachingHome = () => {
  return (
    <section>
      <div className="CoachingWorkHome">
        <div className="CoachingWorkHome__left">
          <img
            src={CoachingImage}
            alt="Coaching Work"
            className="CoachingHome__image"
          />
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
