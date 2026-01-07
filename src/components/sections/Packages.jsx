import React from 'react';
import '../../styles/Packages.css';

const Packages = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      name: 'Basic Package',
      price: '₹1899/Sqft',
      icon: 'fas fa-home',
      subtitle: ''
    },
    {
      name: 'Standard Package',
      price: '₹2299/Sqft',
      icon: 'fas fa-building',
      subtitle: ''
    },
    {
      name: 'Premium Package',
      price: '₹3299/Sqft',
      icon: 'fas fa-crown',
      subtitle: ''
    }
  ];

  return (
    <section id="packages" className="packages">
      <div className="packages-container">
        <div className="section-header">
          <h2 className="section-title">Our Packages</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Choose the perfect package for your dream home
          </p>
          <p className="package-note">
            Note: Prices may vary based on client requirements and location
          </p>
        </div>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card">
              <div className="package-icon">
                <i className={pkg.icon}></i>
              </div>
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">Starts @ {pkg.price}</div>
              {pkg.subtitle && <p className="package-subtitle">{pkg.subtitle}</p>}
              <button className="package-btn" onClick={scrollToContact}>KNOW MORE</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
