import ContactCard from "../../UI/ContactCard";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import "./ContactUs.css";

const ContactUs = ({ image, name, email, phone }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovuwmxp",
        "template_evi465i453",
        form.current,
        "Cc9GCMWakFKr783_5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactCard className="people-card">
      <p className="contact-name" id="contactname">
        Contact {name}
      </p>
      <div className="person_img">
        <img src={image} alt={name} />
      </div>
      <article className="contact-option">
        <button
          className="btn-standard"
          onClick={() =>
            (window.location.href = `mailto:${email}?subject=Teenagers Translated &body=Hi ${name},%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ARegards,%0D%0A%0D%0A `)
          }
        >
          <div className="btn-content">
            <a href={`mailto:${email}`}>Send an email</a>
            <br />
            <MdOutlineEmail className="contact__option-icon" />
          </div>
        </button>
      </article>
      <article className="contact__option">
        <button className="btn-standard">
          <div className="btn-content">
            <a href={`https://wa.me/${phone}`} rel="noreferrer" target="_blank">
              Text or Call
            </a>
            <br />
            <BsWhatsapp className="contact__option-icon" />
          </div>
        </button>
      </article>
      {/* <div className="form-content">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div> */}
    </ContactCard>
  );
};

export default ContactUs;
