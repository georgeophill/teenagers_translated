import React from "react";
import "./Resources.css";
import RollingBar from "../../components/RollingBar";

const Resources = () => {
  const galleryLength = 27;
  return (
    <div>
      <div className="resources">Resources Page coming soon!</div>
      <RollingBar galleryLength={galleryLength} />
    </div>
  );
};

export default Resources;
