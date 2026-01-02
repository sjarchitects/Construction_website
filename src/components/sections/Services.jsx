import React from 'react';
import '../../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fa-solid fa-house',
      title: 'House Construction',
      description: 'Complete house construction services from foundation to finishing'
    },
    {
      icon: 'fa-solid fa-building',
      title: 'Building Construction',
      description: 'Commercial and residential building construction with modern techniques'
    },
    {
      icon: 'fa-solid fa-compass-drafting',
      title: 'Architectural Planning',
      description: 'Professional architectural design and planning services'
    },
    {
      icon: 'fa-solid fa-couch',
      title: 'Interior Design',
      description: 'Beautiful and functional interior design solutions'
    },
    {
      icon: 'fa-solid fa-wrench',
      title: 'Renovation',
      description: 'Expert renovation and remodeling for homes and offices'
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Electrical Works',
      description: 'Complete electrical installation and maintenance services'
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
