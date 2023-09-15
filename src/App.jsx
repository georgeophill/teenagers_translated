import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import Navbar from './components/Navbar';



const App = () => {
    return (
       <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/about" element={<Pages.About />} />
                <Route path="/coaching" element={<Pages.Coaching />} />
                <Route path="/contact" element={<Pages.Contact />} />
                <Route path="/ourBook" element={<Pages.OurBook />} />
                <Route path="/parentWork" element={<Pages.ParentWork />} />
                     <Route path="/parentTalks" element={<Pages.ParentTalks />} />
                <Route path="/resources" element={<Pages.Resources />} />
                <Route path="/schoolWork" element={<Pages.SchoolWork />} />
                <Route path="*" element={<Pages.NotFound />} />
            </Routes>
        </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;