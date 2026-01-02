import React from 'react';
import '../../styles/About.css';
import aboutImage from '../../assets/P1.webp';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>IMPRIMIS Construction</h3>
            <p>
              We are a leading construction company dedicated to building your dream homes 
              with precision, quality, and affordability. With years of experience in the 
              construction industry, we have successfully delivered numerous residential and 
              commercial projects.
            </p>
            <p>
              Our team of expert engineers, architects, and skilled workers ensure that every 
              project is completed with the highest standards of quality and within the agreed 
              timeline. We believe in transparency, professionalism, and customer satisfaction.
            </p>
          </div>
          
          <div className="about-image">
            <img src={aboutImage} alt="Construction" />
          </div>
        </div>
        
        <div className="what-we-do">
          <h3>What do we do?</h3>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon"><i className="fas fa-home"></i></div>
              <h4>Residential Construction</h4>
              <p>Building beautiful homes tailored to your needs</p>
            </div>
            <div className="service-item">
              <div className="service-icon"><i className="fas fa-building"></i></div>
              <h4>Commercial Projects</h4>
              <p>Professional commercial construction services</p>
            </div>
            <div className="service-item">
              <div className="service-icon"><i className="fas fa-drafting-compass"></i></div>
              <h4>Planning & Design</h4>
              <p>Comprehensive architectural planning and design</p>
            </div>
            <div className="service-item">
              <div className="service-icon"><i className="fas fa-tools"></i></div>
              <h4>Renovation</h4>
              <p>Expert renovation and remodeling services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
