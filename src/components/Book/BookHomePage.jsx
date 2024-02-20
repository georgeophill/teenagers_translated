import React from "react";
import { Link } from "react-router-dom";
import BookImage from "../../images/Janey+Naella/book-cover.png"; // Replace with the actual path to your book image
import "./BookHomePage.css";

const BookPage = () => {
  return (
    <div className="book__container">
      <div className="book__left">
        <Link to="/ourBook">
          <h1 className="BookPage__header">Our Book</h1>
        </Link>
        <p className="BookPage__text">
          Parenting is the most important job we ever undertake, and a certain
          amount of teenage turmoil is unavoidable. Teens are growing up in a
          very different world, so it would be a risky strategy to cross our
          fingers and hope for the best. Managing family mental health requires
          self-awareness, understanding, and active parental engagement.
          <Link to="/ourBook">
            <button className="btn-small" id="readMoreButton">
              Read More
            </button>
          </Link>
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
            <button className="btn-xlcool">Buy Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
