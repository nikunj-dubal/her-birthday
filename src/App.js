import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Second from './pages/second';
import Third from './pages/third';

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<Second />} />
        <Route path="/3" element={<Third />} />
      </Routes>

    </Router>
  );
};

export default App;
