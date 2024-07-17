import React, { useEffect } from "react";
import "./121CoachingHome.css";
import CoachingImage from "../../images/Illustrations/121Coaching.jpg";
import { Link } from "react-router-dom";

const CoachingHome = () => {
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
    <section className="hidden">
      <div className="CoachingWorkHome">
        <div className="CoachingWorkHome__left">
          <img
            src={CoachingImage}
            alt="Coaching Work"
            className="CoachingHome__image"
          />
          <Link to="/Coaching">
            <button className="btn-homepage" id="button-coaching">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachingHome;
