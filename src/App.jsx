import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/about" element={<Pages.About />} />
          <Route path="/parentWork" element={<Pages.ParentWork />} />
          <Route
            path="/parentAboutTalks"
            element={<Pages.ParentAboutTalks />}
          />
          <Route path="/parentTalks" element={<Pages.ParentTalks />} />
          <Route path="/parentLunch" element={<Pages.ParentLunch />} />
          <Route path="/parentCharity" element={<Pages.ParentCharity />} />
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
            path="/CoachingForTeenagers"
            element={<Pages.CoachingForTeenagers />}
          />
          <Route path="/ourBook" element={<Pages.OurBook />} />
          <Route path="/resources" element={<Pages.Resources />} />
          <Route path="/contact" element={<Pages.Contact />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </React.StrictMode>
  );
};

export default App;
