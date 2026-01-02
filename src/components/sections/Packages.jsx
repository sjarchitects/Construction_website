import React from 'react';
import '../../styles/Packages.css';

const Packages = () => {
  const packages = [
    {
      name: 'Basic Package',
      price: '₹1,499',
      unit: 'per sq.ft',
      features: [
        'Basic Construction Materials',
        'Standard Finishing',
        'Basic Electrical & Plumbing',
        'Flooring & Tiling',
        'Painting',
        '1 Year Warranty'
      ],
      popular: false
    },
    {
      name: 'Premium Package',
      price: '₹1,899',
      unit: 'per sq.ft',
      features: [
        'Premium Construction Materials',
        'High-Quality Finishing',
        'Advanced Electrical & Plumbing',
        'Designer Flooring & Tiling',
        'Premium Painting',
        'Modular Kitchen',
        'False Ceiling',
        '2 Years Warranty'
      ],
      popular: true
    },
    {
      name: 'Luxury Package',
      price: '₹2,399',
      unit: 'per sq.ft',
      features: [
        'Luxury Construction Materials',
        'Premium Finishing',
        'Smart Home Integration',
        'Imported Flooring & Tiles',
        'Designer Painting',
        'Premium Modular Kitchen',
        'Designer False Ceiling',
        'Home Automation',
        '5 Years Warranty'
      ],
      popular: false
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
            <div key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="package-name">{pkg.name}</h3>
              <div className="package-price">
                <span className="price">{pkg.price}</span>
                <span className="unit">{pkg.unit}</span>
              </div>
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="package-btn">Choose Package</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
