import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ParentTalkPage.css";
import RollingBar from "../../components/RollingBar";

const ParentTalkPage = () => {
  const location = useLocation();
  const galleryLength = 27;

  return (
    <section className="parent-talk-section" id="parent-talk-section">
      {/* <h1 className="h1-parenttalk">School Talks</h1> */}
      <div className="container about-back">
        <div className="header parent-work">
          <div className="talk-buttons">
            <Link
              to="/ParentAboutTalks"
              className={`btn-cool ${
                location.pathname === "/ParentAboutTalks" ? "active" : ""
              }`}
              id="make-smaller-btn"
            >
              About Talks
            </Link>
            <Link
              to="/parentLunch"
              className={`btn-cool ${
                location.pathname === "/parentLunch" ? "active" : ""
              }`}
              id="make-smaller-btn"
            >
              Workplace Talks
            </Link>
            <Link
              to="/parentTalks"
              className={`btn-cool ${
                location.pathname === "/parentTalks" ? "active" : ""
              }`}
              id="make-smaller-btn"
            >
              School Talks
            </Link>
            <Link
              to="/parentCharity"
              className={`btn-cool ${
                location.pathname === "/parentCharity" ? "active" : ""
              }`}
              id="make-smaller-btn"
            >
              Charity Talks
            </Link>
          </div>
          <p>
            These pastoral talks are conducted as 2 – 2.5hr offerings (with Q&A)
            for 50-150 parents of pre-teens and teens age 9-18 years. They can
            be delivered on a weekday morning, or Saturday morning.
            <br />
            <br /> Some private schools use this as an opportunity to justify
            their charitable status by making their facilities available to the
            local community and inviting parents from other schools in the area.
            Over the course of the talk, parents are prompted to jot down
            information relevant to their own child/children so that they
            gradually construct an individual sheet of takeaways relevant to
            their family. The talks are well attended and received. <br />
            <br />
            Depending on your requirements and delivery day, the fee for these
            talks is in the region of £1200.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="bar">
        <RollingBar galleryLength={galleryLength} />
      </div>
    </section>
  );
};

export default ParentTalkPage;
