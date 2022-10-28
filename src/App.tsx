import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { themeChange } from 'theme-change';
import './styles/styles.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
