import React from "react";
import "./Coaching.css";
import CoachingPage from "../../components/121Coaching/CoachingPage";
import RollingBar from "../../components/RollingBar";

const Coaching = () => {
  const galleryLength = 27;
  return (
    <div>
      <CoachingPage />
      <RollingBar galleryLength={galleryLength} />
    </div>
  );
};

export default Coaching;
