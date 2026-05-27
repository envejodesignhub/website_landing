import React from 'react';
import servicesData from '../../data/services.json';
import configData from '../../data/config.json';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './Home.css';

const Home = () => {
  const { hero, industries, whyEnvejo, processSteps } = configData;
  const featuredServices = servicesData.slice(0, 6);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-blob1"></div>
          <div className="hero-blob2"></div>
        </div>
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span className="hero-dot"></span>
                <span className="label" style={{ color: 'var(--purple)' }}>{hero.eyebrow}</span>
              </div>
              <h1 className="hero-headline">
                {hero.headline.split('Growing Businesses')[0]}
                <br />
                <span className="grad">Growing Businesses</span>
              </h1>
              <p className="hero-sub">{hero.subheadline}</p>
              <div className="hero-btns">
                <button className="btn btn-gradient btn-lg">✨ Free Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-sm industries-section">
        <div className="container">
          <p className="text-center label mb-56" style={{ color: '#7b2ff7', fontSize: '14px' }}>Wide range of Industries we serve</p>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-chip">{industry}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section bg-gradient">
        <div className="container">
          <div className="fb mb-40">
            <div>
              <div className="badge badge-purple mb-12">What We Do</div>
              <h2 className="heading" style={{ fontSize: '36px' }}>Our Wide Range of Services</h2>
              <p className="body text-sec mt-8">From concept to creation — everything your brand needs</p>
            </div>
            <a href="/services">
              <button className="btn btn-outline-purple">All Services →</button>
            </a>
          </div>
          <div className="ga">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY ENVEJO */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="g2" style={{ gap: '72px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-pink mb-16">Why Envejo?</div>
              <h2 className="heading mb-16" style={{ fontSize: '38px' }}>
                Creative studio + manufacturing, under one roof
              </h2>
              <p className="body-lg text-sec mb-32">
                Most agencies design. We design <em>and</em> build. Our in-house fabrication studio means faster delivery, better quality and unbeatable pricing — all in Guduvancherry, Chennai.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {whyEnvejo.map((item, index) => (
                  <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      background: item.bg,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="subhead mb-4">{item.title}</div>
                      <div className="body text-sec">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="g2" style={{ gap: '64px', alignItems: 'start' }}>
            <div>
              <div className="badge badge-purple mb-16">How We Work</div>
              <h2 className="heading mb-16" style={{ fontSize: '36px' }}>From Brief to Beautiful</h2>
              <p className="body-lg text-sec mb-32">
                A simple, streamlined process that keeps you in control at every step — no surprises, no delays.
              </p>
              <button className="btn btn-gradient btn-lg">Start Your Project →</button>
            </div>
            <div>
              {processSteps.map((step, index) => (
                <div key={index} className={`process-step ${index === processSteps.length - 1 ? 'last' : ''}`}>
                  <div className="process-num">{step.num}</div>
                  <div>
                    <div className="process-title">{step.title}</div>
                    <div className="process-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-box">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>✨</div>
              <h2 className="cta-title">Ready to Build Your Brand?</h2>
              <p className="cta-desc">
                Book a free 30-minute consultation. We'll understand your vision and give you a clear roadmap — no commitment needed.
              </p>
              <div className="fc gap-14" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
                <button className="btn btn-white btn-lg">✨ Free Consultation →</button>
                <button className="btn btn-lg cta-secondary">Book a Project</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
