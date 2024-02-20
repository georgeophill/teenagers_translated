import React from "react";
import { Link } from "react-router-dom";
import "./SchoolWorkHome.css";
import SchoolWorkImage from "../../images/Illustrations/SchoolsFINAL.png";

const SchoolWorkHome = () => {
  return (
    <section>
      <div className="SchoolWork">
        <div className="SchoolWork__right">
          <img
            src={SchoolWorkImage}
            alt="School Work"
            className="SchoolWork__Image"
          />
          <Link to="/SchoolWork">
            <button className="btn-xlcool" id="school__button">
              Read more about our courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchoolWorkHome;
