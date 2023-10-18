import React from "react";
import "./Resources.css";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div>
      <section className="about">
        <h1 className="about-head">Rescources</h1>
        <div className="container about-back">
          <div className="header about-us">
            <p>
              Our resources signpost parents & teens to additional support,
              information & understanding to promote better family mental health
            </p>
          </div>
          <div id="about-btn">
            <Link to="/resources">
              <button className="btn-large">Find out more</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
