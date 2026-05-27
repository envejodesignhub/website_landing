import React from 'react';
import b2bData from '../../data/b2b.json';
import brandingPackages from '../../data/brandingPackages.json';
import './B2B.css';

const B2B = () => {
  return (
    <div className="b2b-page">
      <section className="section b2b-hero">
        <div className="container">
          <div className="badge badge-white mb-20">For Businesses & Institutions</div>
          <h1 className="b2b-hero-title">
            B2B Creative Services<br />
            <span className="b2b-hero-gradient">Built for Scale</span>
          </h1>
          <p className="b2b-hero-desc">
            Dedicated creative partnership for schools, corporate offices, agencies, restaurant chains and institutions. Priority slots, volume pricing and a dedicated account manager.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button className="btn btn-lg btn-gradient">Schedule B2B Consultation →</button>
            <button className="btn btn-lg" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '2px solid rgba(255,255,255,.25)' }}>
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <h2 className="heading mb-10" style={{ fontSize: '36px' }}>B2B Service Packages</h2>
          <p className="body text-sec mb-40">Tailored solutions for businesses with ongoing creative needs</p>
          
          <div className="ga mb-48">
            {b2bData.map((item, index) => (
              <div key={index} className="card card-p card-hover">
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div className="subhead">{item.name}</div>
                  <span className="badge badge-purple">{item.tag}</span>
                </div>
                <div className="body text-sec mb-14">{item.desc}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: 'var(--purple)' }}>
                    {item.price}
                  </div>
                  <button className="btn btn-pink btn-sm">Enquire →</button>
                </div>
              </div>
            ))}
          </div>

          {/* Website Making */}
          <div className="website-section">
            <div className="g2" style={{ gap: '40px', alignItems: 'center' }}>
              <div>
                <div className="badge badge-purple mb-16">🌐 Digital Services</div>
                <h2 className="heading mb-14" style={{ fontSize: '34px' }}>Website Design & Development</h2>
                <p className="body text-sec mb-24">
                  Professional websites for businesses, schools, restaurants and portfolios. Mobile-first, SEO-ready and delivered in 7–14 days.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {[
                    'Custom design — no templates',
                    'Mobile responsive & SEO optimised',
                    'WhatsApp chat & enquiry form integration',
                    'Google Maps & business profile setup',
                    '1 month of free revisions after launch'
                  ].map((feature, index) => (
                    <div key={index} className="fc gap-10">
                      <span style={{ color: 'var(--green)' }}>✓</span>
                      <span className="body">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-purple btn-lg">Get Website Quote →</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="card card-p" style={{ borderLeft: '4px solid var(--pink)' }}>
                  <div className="fc gap-10 mb-8">
                    <span style={{ fontSize: '20px' }}>📄</span>
                    <div className="subhead">1-Page Landing Site</div>
                  </div>
                  <div className="body text-sec mb-8">Perfect for new businesses, events or product launches</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--pink)' }}>
                    ₹4,999 <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--muted)' }}>onwards</span>
                  </div>
                </div>
                <div className="card card-p" style={{ borderLeft: '4px solid var(--purple)' }}>
                  <div className="fc gap-10 mb-8">
                    <span style={{ fontSize: '20px' }}>🌐</span>
                    <div className="subhead">Multi-page Business Site</div>
                  </div>
                  <div className="body text-sec mb-8">5–8 pages with full services, contact and blog</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--purple)' }}>
                    ₹12,999 <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--muted)' }}>onwards</span>
                  </div>
                </div>
                <div className="card card-p" style={{ borderLeft: '4px solid var(--gold)' }}>
                  <div className="fc gap-10 mb-8">
                    <span style={{ fontSize: '20px' }}>🛒</span>
                    <div className="subhead">E-commerce Store</div>
                  </div>
                  <div className="body text-sec mb-8">Full online store with payment gateway</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, color: 'var(--gold)' }}>
                    ₹24,999 <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--muted)' }}>onwards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branding packages */}
          <h3 className="subhead mb-20" style={{ fontSize: '20px', marginTop: '48px' }}>Branding Packages</h3>
          <div className="g3">
            {brandingPackages.map((pkg, index) => (
              <div key={index} className={`plan-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="plan-pop-badge">⭐ Most Popular</div>}
                <div className="plan-name">{pkg.name}</div>
                <div className="plan-price">{pkg.price}</div>
                <div className="plan-orig">{pkg.orig}</div>
                <div className="plan-desc mt-8">{pkg.desc}</div>
                <div className="plan-features">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="plan-feat">
                      <span className="tick">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`btn ${pkg.popular ? 'btn-gradient' : 'btn-outline-purple'} btn-full`}>
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;
