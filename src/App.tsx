import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Shop from 'components/Shop';
import Faq from 'components/Faq';
import Brands from 'components/Brands';
import Stories from 'components/Stories';
import Sale from 'components/Sale';

const App = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Shop />} />
          <Route path="/brands" element={<Brands />} />
          <Route
            path="/stories"
            element={<Stories headings={[]} ctaUrl={[]} />}
          />
          <Route path="/sale" element={<Sale />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
      <Footer companyName={''} year={0} />
    </div>
  );
};

export default App;
