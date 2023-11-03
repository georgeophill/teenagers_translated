import React from "react";
import "./ParentWork.css";
import ParentWorkPage from "../../components/ParentWork/ParentWorkPage";
import RollingBar from "../../components/RollingBar";

const ParentWork = () => {
  const galleryLength = 27;

  return (
    <div>
      <ParentWorkPage />
      <RollingBar galleryLength={galleryLength} />
    </div>
  );
};

export default ParentWork;
