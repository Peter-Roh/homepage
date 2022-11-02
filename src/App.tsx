import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
