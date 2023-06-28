import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';
import Home from './pages/Home';
import Info from './pages/Info';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
