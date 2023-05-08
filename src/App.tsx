import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Shop from 'components/Shop';
import Faq from 'components/Faq';

const App = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Shop />} />
          <Route path="/about" element={<Faq />} />
        </Routes>
      </Router>
      <Footer companyName={''} year={0} />
    </div>
  );
};

export default App;
