import React, { useEffect, useState } from "react";
import "./OurBook.css";
import BookPage from "../../components/Book/BookPage";
import RollingBar from "../../components/RollingBar";
import { BookFeedback } from "../../data";

const OurBook = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const galleryLength = 27;

  // Function to switch to the next quote
  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === BookFeedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Use setTimeout to change the quote every 10 seconds
    const timer = setInterval(nextQuote, 10000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const currentQuote = BookFeedback[currentQuoteIndex].quote;

  return (
    <div>
      <BookPage />
      <div className="feedback">
        <div className="speech-bubble-container-book">
          <p className="speech-bubble-text-book">"{currentQuote}"</p>
        </div>
      </div>
      <div className="bar"></div>
      <RollingBar
        galleryLength={galleryLength}
        currentImageIndex={currentQuoteIndex}
        setCurrentImageIndex={setCurrentQuoteIndex}
      />
    </div>
  );
};

export default OurBook;
