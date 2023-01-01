import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Abouts from './pages/about';
import Gallerys from './pages/gallery';
import Projects from './pages/project';
import Contacts from './pages/contact';
import Achievement from './pages/achivements';
import Teams from './pages/team';
import Home from './pages';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <Router>
        <Routes>
        
          <Route path="/" element={<>
          <Home/>
          </>} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/gallery" element={<Gallerys />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/team" element={<Teams />} />
        </Routes>
    </Router>
  );
}

export default App;
