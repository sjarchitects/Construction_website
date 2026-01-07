import React from 'react';
import '../../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fa-solid fa-house',
      title: 'Residential Construction',
      description: 'Complete residential construction services from foundation to finishing with quality craftsmanship'
    },
    {
      icon: 'fa-solid fa-building',
      title: 'Commercial Construction',
      description: 'Professional commercial building construction with modern techniques and standards'
    },
    {
      icon: 'fa-solid fa-compass-drafting',
      title: 'Architectural Designing',
      description: 'Innovative architectural design and planning services tailored to your vision'
    },
    {
      icon: 'fa-solid fa-ruler-combined',
      title: 'Structural Design',
      description: 'Expert structural design and engineering solutions for safe and durable buildings'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Comprehensive construction solutions for all your building needs
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
