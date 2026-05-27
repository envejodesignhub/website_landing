import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card card-hover">
      <div className="service-icon-box" style={{ background: service.iconBg }}>
        {service.icon}
      </div>
      <div className="service-title">{service.title}</div>
      <div className="service-desc">{service.desc}</div>
      <div className="service-tags">
        {service.tags.map((tag, index) => (
          <span key={index} className="service-tag">{tag}</span>
        ))}
      </div>
      <div className="service-price">{service.price}</div>
    </div>
  );
};

export default ServiceCard;
