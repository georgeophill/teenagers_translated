import React from "react";
import AboutUsPage from "../../components/AboutUsPage";
import "./About.css";
import { people } from "../../data";
import WhoWeAre from "../../components/WhoWeAre";
import RollingBar from "../../components/RollingBar";

const About = () => {
  const galleryLength = 27;
  return (
    <>
      <AboutUsPage />
      <div>
        <section className="who-we-are">
          {/* <h1>Who we are</h1> */}
          <div className="people__container">
            {people.map(({ id, image, name, biography }) => {
              return (
                <WhoWeAre
                  key={id}
                  image={image}
                  name={name}
                  biography={biography}
                />
              );
            })}
          </div>
        </section>
        <RollingBar galleryLength={galleryLength} />
      </div>
    </>
  );
};

export default About;
