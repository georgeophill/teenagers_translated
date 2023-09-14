import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import OurBook from './pages/ourBook/OurBook';
import ParentWork from './pages/parentWork/ParentWork';
import Resources from './pages/resources/Resources';
import SchoolWork from './pages/schoolWork/SchoolWork';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';


const App = () => {
    return (
       <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
                <Route path="/ourBook" element={<OurBook />} />
                <Route path="/parentWork" element={<ParentWork />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/schoolWork" element={<SchoolWork />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;