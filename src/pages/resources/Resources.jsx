import React from "react";
import "./Resources.css";
import RollingBar from "../../components/RollingBar";

const Resources = () => {
  const galleryLength = 27;
  return (
    <div>
      <div>Resources Page</div>
      <RollingBar galleryLength={galleryLength} />
    </div>
  );
};

export default Resources;
