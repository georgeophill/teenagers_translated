import React from "react";
import { Link } from "react-router-dom";
import "./SchoolWorkHome.css";
import SchoolWorkImage from "../../images/Illustrations/SchoolsFINAL.png";

const SchoolWorkHome = () => {
  return (
    <div className="school__header">
      <div className="school__header__container">
        <div className="school__header__content">
          <div className="school__header__text">
            <h1 className="SchoolWorkHome__header"> School Work</h1>
            <p className="SchoolWorkHome__quote">
              We support students and staff to build an awareness and
              understanding of how pre-teens and teens manage themselves more
              effectively and confidently as they become independent young
              people
            </p>
            <Link to="/SchoolWork">
              <button className="btn-xlcool" id="school__button">
                Read more about our courses
              </button>
            </Link>
          </div>
        </div>
        <div className="SchoolWork__right">
          <img src={SchoolWorkImage} alt="School Work" />
        </div>
      </div>
    </div>
  );
};

export default SchoolWorkHome;
