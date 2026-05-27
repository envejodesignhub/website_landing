import React, { useState } from 'react';
import servicesData from '../../data/services.json';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    ['all', 'All Services'],
    ['branding', 'Branding'],
    ['print', 'Print'],
    ['digital', 'Digital'],
    ['fabrication', 'Fabrication'],
    ['decor', 'Décor']
  ];

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.cat === activeFilter);

  const printServices = [
    { icon: "💼", name: "Business Cards", desc: "Premium matte / gloss / textured finish. Minimum 50 cards.", price: "₹499 for 100" },
    { icon: "📄", name: "A4 / A5 Flyers", desc: "Single or double side. 150gsm art paper. Any quantity.", price: "₹299 for 50" },
    { icon: "📋", name: "Brochures", desc: "Tri-fold, bi-fold or Z-fold. Full colour, premium paper.", price: "₹699 for 25" },
    { icon: "🖼️", name: "Posters & Banners", desc: "Indoor / outdoor quality. Any size up to 8×4 ft.", price: "₹199 per sq.ft" },
    { icon: "🪪", name: "ID Cards & Badges", desc: "PVC ID cards with lanyard. School / office badges.", price: "₹49 per card" },
    { icon: "📦", name: "Product Labels", desc: "Custom die-cut product labels on vinyl or paper.", price: "₹199 for 50" },
    { icon: "🎁", name: "Gift Wrapping Prints", desc: "Custom tissue paper, gift bags and wrapping sheets.", price: "₹299 for 10" },
    { icon: "📝", name: "Stationery Sets", desc: "Letterhead, envelopes, notepads — branded sets.", price: "₹1,499 per set" },
    { icon: "🎉", name: "Invitations", desc: "Wedding, birthday, corporate event invitations.", price: "₹99 per piece" }
  ];

  return (
    <div className="services-page">
      <section className="section bg-gradient">
        <div className="container text-center">
          <div className="badge badge-purple mb-16">Everything We Offer</div>
          <h1 className="heading mb-10" style={{ fontSize: '48px', margin: '21px 0' }}>Our Services</h1>
          <p className="body-lg text-sec mb-40">
            From visual identity to physical fabrication, Envejo transforms ideas into impactful realities through comprehensive creative, digital and production services for businesses of every scale.
          </p>
          
          <div className="filter-chips mb-32">
            {categories.map(([key, label]) => (
              <button
                key={key}
                className={`chip ${activeFilter === key ? 'active' : ''}`}
                onClick={() => setActiveFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
          
          <div className="ga" style={{ textAlign: 'left' }}>
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL PRINT SERVICES */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="badge badge-pink mb-16">Print & Fabrication</div>
          <h2 className="heading mb-10" style={{ fontSize: '36px' }}>Digital Print Services</h2>
          <p className="body text-sec mb-40">
            Professional print outputs for every need — business, school, events and personal
          </p>
          <div className="g3">
            {printServices.map((service, index) => (
              <div key={index} className="card card-p card-hover">
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{service.icon}</div>
                <div className="subhead mb-5">{service.name}</div>
                <div className="body text-sec mb-10">{service.desc}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: 'var(--purple)' }}>
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B QUICK LINK */}
      <section className="section-sm bg-gradient">
        <div className="container">
          <div className="cta-box" style={{ padding: '48px 40px' }}>
            <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', textAlign: 'left' }}>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>
                  Need Bulk or Corporate Services?
                </h3>
                <p style={{ color: 'rgba(255,255,255,.85)', fontSize: '14px' }}>
                  Schools, corporates and agencies get special pricing, dedicated account management and priority production slots.
                </p>
              </div>
              <a href="/b2b">
                <button className="btn btn-white btn-lg">Explore B2B Services →</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
