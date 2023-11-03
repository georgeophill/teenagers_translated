import React from "react";
import { Link } from "react-router-dom";
import SchoolImage from "../../images/Illustrations/SchoolsFINAL.png";
import "./SchoolWorkPage.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const SchoolWorkPage = () => {
  return (
    <div>
      <section className="school-purple">
        <h1 className="h1-schoolwork">Teenagers Translated School Work</h1>
        <div className="container about-back">
          <div className="header school-work">
            <p>
              <RiDoubleQuotesL className="quotes" />
              We support students and staff to build an awareness and
              understanding of how pre-teens and teens manage themselves more
              effectively and confidently as they become independent young
              people
              <RiDoubleQuotesR className="quotes" />
              <br />
              <br />
            </p>
            <div className="buttons-school">
              <Link to="/StudentWork">
                <div className="btn-xlarge">Student Work</div>
              </Link>
              <Link to="/SchoolCulture">
                <div className="btn-xlarge">Wellbeing & Mental Health</div>
              </Link>
              <Link to="/StaffInputs">
                <div className="btn-xlarge">Staff Inputs</div>
              </Link>
            </div>
            <div className="school-image">
              <img className="image" src={SchoolImage} alt="ParentImage" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolWorkPage;
