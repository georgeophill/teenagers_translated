import React from "react";
import BookImage from "../../images/Janey+Naella/book-cover.png"; // Replace with the actual path to your book image
import "./BookPage.css";

const BookPage = () => {
  return (
    <div className="book__container">
      <div className="book__left">
        <h1 className="BookPage__header">Our Book</h1>
        <p className="BookPage__text">
          Many parents are facing challenging issues, and our book lays out
          tools and strategies that we have found actually work. These have been
          distilled over years of being parents to seven teenagers, practicing
          as counselors, and over a decade of developing and conducting our
          presentations and workshops for parents, staff, and teens around the
          UK and overseas.
          <br />
          <br />
          The information is relevant to all parents, grandparents, teachers,
          counsellors, family workers, guardians AND teenagers - not only those
          struggling with problems. You will discover more about what is going
          on, both in terms of overall development, but also what teenagers are
          exposed to, why they do what they do and how to deal more effectively
          with problems and challenges as they crop up. We’ve outlined
          interesting and relevant facts about their brain, emotions,
          personality, psychology and have pulled together a wide range of
          practical ways to positively influence mental health, wellbeing and
          resilience.
          <br />
          <br />
          This book is designed for you to dip in and out of, as things arise,
          and for you to allow your intuition to guide you as to what you might
          need to do more of and what you might need to do less of. We hope
          that, like our courses, it will leave you feeling optimistic and
          encouraged to give some of our ideas a go. Like dropping a pebble in a
          pond, the ripples will spread and you will find that your small
          changes can have a big impact.
        </p>
      </div>
      <div className="book__right">
        <div className="book__right-border">
          <a
            href="https://www.amazon.co.uk/Teenagers-Translated-Parents-Survival-September/dp/0091954738"
            target="_blank"
            rel="noreferrer"
          >
            <img src={BookImage} alt="BookImage" className="snake-border" />
          </a>
        </div>
        <div className="buy-now-button">
          <a
            href="https://www.amazon.co.uk/Teenagers-Translated-Parents-Survival-September/dp/0091954738"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-cool">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
