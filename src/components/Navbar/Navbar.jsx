import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.svg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div id="announce">
        ✨ New: Business Startup Kits now available · Free consultation for first 20 clients this month · <a href="#consult">Book Yours →</a>
      </div>
      
      <nav id="navbar">
        <div className="nav-inner">
          <div className="nav-container">
            <Link to="/" className="nav-logo-mark">
              <img src={logo} alt="Envejo" style={{ width: '120px', height: '40px' }} />
            </Link>
            
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <NavLink to="/" end className="nav-link" onClick={closeMobileMenu}>Home</NavLink>
              <NavLink to="/services" className="nav-link" onClick={closeMobileMenu}>Services</NavLink>
              <NavLink to="/decor" className="nav-link" onClick={closeMobileMenu}>Decor & Spaces</NavLink>
              <NavLink to="/b2b" className="nav-link" onClick={closeMobileMenu}>B2B</NavLink>
              <a href="https://store.envejo.com" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={closeMobileMenu}>Shop</a>
              
              <div className="nav-btns-mobile">
                <button className="btn btn-ghost btn-sm">📞 Free Consult</button>
                <button className="btn btn-gradient btn-sm">Book Now →</button>
              </div>
            </div>
            
            <div className="nav-right">
              <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
                <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
