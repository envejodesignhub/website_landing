import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <>
      <div id="announce">
        ✨ New: Business Startup Kits now available · Free consultation for first 20 clients this month · <a href="#consult">Book Yours →</a>
      </div>
      
      <nav id="navbar">
        <div className="nav-inner">
          <div className="fc" style={{ padding: '12px 0', width: '100%' }}>
            <Link to="/" className="nav-logo-mark" style={{ marginRight: '16px', flexShrink: 0 }}>
              <img src={logo} alt="Envejo" style={{ width: '120px', height: '40px' }} />
            </Link>
            
            <div className="fc" style={{ flex: 1, justifyContent: 'center', gap: '0' }}>
              <NavLink to="/" end className="nav-link">Home</NavLink>
              <NavLink to="/services" className="nav-link">Services</NavLink>
              <NavLink to="/decor" className="nav-link">Decor & Spaces</NavLink>
              <NavLink to="/b2b" className="nav-link">B2B</NavLink>
              <a href="https://store.envejo.com" target="_blank" rel="noopener noreferrer" className="nav-link">Shop</a>
            </div>
            
            <div className="fc gap-8" style={{ flexShrink: 0 }}>
              <button className="btn btn-ghost btn-sm">📞 Free Consult</button>
              <button className="btn btn-gradient btn-sm">Book Now →</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
