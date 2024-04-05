import React, { useState, useEffect, useRef } from "react";
import "./RollingBar.css";

const RollingBar = ({ galleryLength }) => {
  const [logos, setLogos] = useState([]);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalLogos = logos.length;
  const itemWidth = 100 / 6 + 10; // Adjust the width to include spacing between logos
  const extendedLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ]; // Duplicate the logos array to create a continuous loop

  useEffect(() => {
    const fetchLogos = async () => {
      const logosArray = [];

      for (let i = 1; i <= galleryLength; i++) {
        try {
          const logoModule = await import(`../images/logos/logo${i}.png`); // Load logo images
          logosArray.push(logoModule.default);
        } catch (error) {
          console.error(`Error loading logo ${i}:`, error);
        }
      }

      setLogos(logosArray);
    };

    fetchLogos();
  }, [galleryLength]);

  useEffect(() => {
    const scrollLogos = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLogos);
    };

    const interval = setInterval(scrollLogos, 8000); // Adjust the interval for the scroll speed (8s)

    return () => {
      clearInterval(interval);
    };
  }, [totalLogos]);

  return (
    <div className="carousel__container" ref={containerRef}>
      {/* <div className="where-we-worked">
        <h1 className="where-we-worked">Where we have worked</h1>
      </div> */}
      <div
        className="carousel__inner"
        style={{
          transform: `translateX(-${currentIndex * itemWidth}%)`,
          transition: "transform 8s linear", // Set the CSS animation duration to 8s
        }}
      >
        {extendedLogos.map((logo, index) => (
          <div className="carousel__item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingBar;
