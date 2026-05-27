import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Decor from './pages/Decor/Decor';
import B2B from './pages/B2B/B2B';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="/b2b" element={<B2B />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
