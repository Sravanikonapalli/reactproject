import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import MainSection from './components/MainSection';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
