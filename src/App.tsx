import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import LandingPage from './pages/LandingPage';
import { Helmet } from "react-helmet";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bounce Alerts</title>
        <link rel="canonical" href="https://bouncealerts.com/" />
        <meta content="Developed by superbluestar. You can find me live:.cid.4ed5b0d404ec64fc in skype or contact me via alexander116gm@gmail.com"/>
      </Helmet>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="test" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
