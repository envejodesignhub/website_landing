import React from 'react';
import decorData from '../../data/decor.json';
import classroomThemes from '../../data/classroomThemes.json';
import './Decor.css';

const Decor = () => {
  return (
    <div className="decor-page">
      <section className="section bg-gradient">
        <div className="container">
          <div className="badge badge-pink mb-16">Spaces & Environments</div>
          <h1 className="heading mb-10" style={{ fontSize: '48px' }}>Decor & Space Design</h1>
          <p className="body-lg text-sec mb-40" style={{ maxWidth: '620px' }}>
            We transform classrooms, offices, shops, restaurants and homes with custom-fabricated décor, wall art, signage and themed installations.
          </p>
          
          <div className="ga">
            {decorData.map((item, index) => (
              <div key={index} className="card card-p card-hover">
                <div style={{ fontSize: '36px', marginBottom: '14px' }}>{item.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div className="subhead" style={{ fontSize: '16px' }}>{item.name}</div>
                  <span className="badge badge-pink">{item.tag}</span>
                </div>
                <div className="body text-sec mb-14">{item.desc}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: 'var(--purple)' }}>
                    {item.price}
                  </div>
                  <button className="btn btn-gradient btn-sm">Book →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSROOM MAKEOVER FEATURE */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="badge badge-purple mb-16">🏫 Most Popular Service</div>
          <h2 className="heading mb-14 text-center" style={{ fontSize: '36px' }}>
            Classroom <span className="grad-text">Makeover Packages</span>
          </h2>
          <p className="body text-sec text-center mb-40" style={{ maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto' }}>
            Transform any classroom into an inspiring, themed learning environment. 10 themes available — all custom fabricated in-house.
          </p>
          
          <div className="ga-sm mb-40">
            {classroomThemes.map((theme, index) => (
              <div key={index} className="card card-p-sm card-hover text-center">
                <div style={{ fontSize: '36px', marginBottom: '8px' }}>{theme.e}</div>
                <div className="subhead mb-4" style={{ fontSize: '14px' }}>{theme.name}</div>
                <div className="body text-sec" style={{ fontSize: '12px' }}>{theme.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="classroom-features-box">
            <div>
              <h3 className="subhead mb-8" style={{ fontSize: '18px' }}>Every Classroom Makeover Includes:</h3>
              <div className="features-grid">
                {['Theme consultation & mood board', 'Custom wall art & murals (vinyl)', 'Educational display boards', 'Name plates & labels', 'Corner décor & hanging elements', 'Professional installation'].map((feature, index) => (
                  <div key={index} className="fc gap-8">
                    <span style={{ color: 'var(--green)' }}>✓</span>
                    <span className="body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="grad-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: '44px', fontWeight: 900 }}>
                ₹25,000+
              </div>
              <div className="body text-muted mb-16">per classroom</div>
              <button className="btn btn-gradient btn-lg">Book Makeover →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Decor;
