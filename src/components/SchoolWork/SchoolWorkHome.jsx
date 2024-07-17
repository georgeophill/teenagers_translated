import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SchoolWorkHome.css";
import SchoolWorkImage from "../../images/Illustrations/SchoolsFINAL.jpg";

const SchoolWorkHome = () => {
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
      <div className="SchoolWork">
        <div className="SchoolWork__right">
          <img
            src={SchoolWorkImage}
            alt="School Work"
            className="SchoolWork__Image"
          />
          <Link to="/SchoolWork">
            <button className="btn-homepage" id="school-button">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchoolWorkHome;
