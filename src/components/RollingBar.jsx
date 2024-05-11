import React, { useState, useEffect, useRef } from "react";
import "./RollingBar.css";
import "react-tooltip/dist/react-tooltip.css";

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
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef(null);

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
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLogos);
      }
    };

    intervalRef.current = setInterval(scrollLogos, 8000); // Adjust the interval for the scroll speed (8s)

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [totalLogos, isDragging]);

  const handleMouseDown = (e) => {
    clearInterval(intervalRef.current); // Stop automatic scrolling when mouse is pressed
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the multiplier to control the dragging speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (!isDragging) {
      intervalRef.current = setInterval(() => {
        if (!isDragging) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLogos);
        }
      }, 8000); // Resume automatic scrolling when mouse is released
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (!isDragging) {
      intervalRef.current = setInterval(() => {
        if (!isDragging) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLogos);
        }
      }, 8000); // Resume automatic scrolling when mouse leaves
    }
  };

  const handleTouchStart = (e) => {
    clearInterval(intervalRef.current); // Stop automatic scrolling when touch starts
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the multiplier to control the dragging speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!isDragging) {
      intervalRef.current = setInterval(() => {
        if (!isDragging) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLogos);
        }
      }, 8000); // Resume automatic scrolling when touch ends
    }
  };

  return (
    <div
      className="carousel__container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <span className="tooltiptext">Drag to scroll through schools </span>
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
