import React from "react";
import "./Contact.css";
import ContactUs from "../../components/Contact/ContactUs";
import { people } from "../../data";
import RollingBar from "../../components/RollingBar";

const Contact = () => {
  const galleryLength = 27;
  return (
    <div>
      <section className="who-we-are">
        <h1>Contact Us</h1>
        <div className="people__container">
          {people.map(({ id, image, name, email, phone }) => {
            const firstName = name.length > 0 ? name[0] : "";

            return (
              <ContactUs
                key={id}
                image={image}
                name={firstName}
                email={email}
                phone={phone}
              />
            );
          })}
        </div>
      </section>
      <RollingBar galleryLength={galleryLength} />
    </div>
  );
};

export default Contact;
