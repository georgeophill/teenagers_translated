import React from "react";
import "./Resources.css";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div>
      <section className="resources">
        <h1 className="resources-head">Resources</h1>
        <div className="container resources-back">
          <div className="header resources-us">
            <p>
              Our resources signpost parents & teens to additional support,
              information & understanding to promote better family mental health
            </p>
          </div>
          <div id="resources-btn">
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
