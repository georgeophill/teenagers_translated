import React from "react";
import "./SchoolWork.css";
import SchoolWorkPage from "../../components/SchoolWork/SchoolWorkPage";
import RollingBar from "../../components/RollingBar";

const SchoolWork = () => {
  const galleryLength = 27;
  return (
    <div>
      <SchoolWorkPage />
      <RollingBar galleryLength={galleryLength} />
    </div>
  );
};

export default SchoolWork;
