import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/parentWork" element={<Pages.ParentWork />} />
          <Route path="/parentTalks" element={<Pages.ParentTalks />} />
          <Route path="/parentWorkshops" element={<Pages.ParentWorkshops />} />
          <Route path="/parentCoaching" element={<Pages.ParentCoaching />} />
          <Route path="/schoolWork" element={<Pages.SchoolWork />} />
          <Route path="/studentWork" element={<Pages.StudentWork />} />
          <Route path="/staffInputs" element={<Pages.StaffInputs />} />
          <Route path="/schoolCulture" element={<Pages.SchoolCulture />} />
          <Route path="/coaching" element={<Pages.Coaching />} />
          <Route
            path="/coachingForParents"
            element={<Pages.CoachingForParents />}
          />
          <Route
            path="/coachingForTeenagers"
            element={<Pages.CoachingForTeenagers />}
          />
          <Route path="/ourBook" element={<Pages.OurBook />} />
          <Route path="/resources" element={<Pages.Resources />} />
          <Route path="/contact" element={<Pages.Contact />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
