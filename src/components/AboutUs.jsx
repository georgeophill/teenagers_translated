import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <section>
        <div className="header">
          <h1>Who we are</h1>
        </div>
        <div className="container">
          <h3>
            Janey Downshire and Naella Grew are co-founders of Teenagers
            Translated. Both are married mothers of grown up children, and came
            to specializing in teenage issues as second careers, when their
            children were in their teens. They are both trained counsellors and
            members of the BACP (British Association of Counsellors &
            Psychologists). <br />
            <br /> Their bespoke training programmes comprising parent talks,
            courses and workshops have been delivered to thousands of parents
            around the UK and overseas, in schools and communities. Alongside
            these, they have developed and conducted student workshops to
            dovetail with a school’s existing PSHE provision, and designed to
            enhance good mental health and wellbeing. Their staff inset training
            further supports student learning, awareness and positive mental
            health and wellbeing. They have taught in over 50 schools in the UK
            & overseas during the last 14 years. <br />
            <br />
            Over this period, they have been regularly in the press and spoken
            at conferences including the Boarding Schools Association and the
            State Boarding School Association. They were also the National
            Citizens Service spokespeople for a media campaign aimed at helping
            parents to better manage teenage stress. As members of BACP, they
            both undertake ongoing professional development training around
            healthy child development, wellbeing and mental health in schools.
            Their book was first published in 2014, with a second edition in
            2018.
          </h3>
          <button className="btn-medium" id="about-btn">
            Find out more about us...
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
