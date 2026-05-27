import React from 'react';
import './Footer.css';
import configData from '../../data/config.json';
import logo from '../Navbar/logo.svg';

const Footer = () => {
  const { footer, site } = configData;
  
  return (
    <footer className="footer">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt={site.name} style={{ width: '120px', height: '40px', marginBottom: '18px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="footer-desc">
              {footer.description}
            </p>
            <div className="footer-contact">
              <div>📧 {site.email}</div>
              <div>📍 {site.location}</div>
              <div>📱 {site.phone}</div>
            </div>
          </div>
          
          <div>
            <div className="footer-heading">Services</div>
            <div className="footer-links">
              {footer.services.map((item, index) => (
                <a key={index} href={item.link}>{item.label}</a>
              ))}
            </div>
          </div>
          
          <div>
            <div className="footer-heading">Products</div>
            <div className="footer-links">
              {footer.products.map((item, index) => (
                <a key={index} href={item.link}>{item.label}</a>
              ))}
            </div>
          </div>
          
          <div>
            <div className="footer-heading">Company</div>
            <div className="footer-links">
              {footer.company.map((item, index) => (
                <a key={index} href={item.link}>{item.label}</a>
              ))}
            </div>
          </div>
          
          <div>
            <div className="footer-heading">Get Started</div>
            <div className="footer-links">
              {footer.getStarted.map((item, index) => (
                <a key={index} href={item.link}>{item.label}</a>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <div className="footer-heading" style={{ marginBottom: '12px' }}>{footer.educationBrand.heading}</div>
              <div 
                style={{
                  background: 'rgba(255,255,255,.08)',
                  border: '1px solid rgba(255,255,255,.12)',
                  borderRadius: '10px',
                  padding: '12px',
                  cursor: 'pointer'
                }}
                onClick={() => window.open(footer.educationBrand.link, '_blank')}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>{footer.educationBrand.name}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.5)' }}>{footer.educationBrand.description}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <span>{footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
