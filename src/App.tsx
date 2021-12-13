import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="test" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
