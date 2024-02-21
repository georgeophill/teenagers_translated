import React, { useEffect } from "react";
import "./ParentWorkHome.css";
import ParentImage from "../../images/Illustrations/ParentFINAL.png";
import { Link } from "react-router-dom";

const ParentWorkHome = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="parent-section" className="hidden">
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
