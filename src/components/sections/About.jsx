import React from 'react';
import '../../styles/About.css';
import aboutImage from '../../assets/P1.webp';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Us</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>"Building Excellence, Crafting Trust"</h3>
            <h4>AT IMPRIMIS BUILDERS DESIGNS & CONSTRUCTIONS</h4>
            <p>
              We are more than just a construction company - we are your partners in bringing visions to life. 
              With decades of experience, a commitment to quality, and a passion for innovation, we specialize 
              in delivering exceptional construction solutions tailored to your unique needs.
            </p>
            <p>
              From groundbreaking designs to flawless execution, our team of skilled professionals ensures every 
              project is built to the highest standards of craftsmanship, sustainability, and safety. Whether it's 
              a custom home, a commercial space, from a custom detailed 2D, 3D floor plans, photorealistic Elevations, 
              interior designs, Architectural plan, UHD walkthrough & Virtual Reality experience, Structural consultancy, 
              project management, PEB structures and end to end solution for construction management requirements.
            </p>
          </div>
          
          <div className="about-image">
            <div className="decorative-dots top-left">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
            <div className="decorative-dots bottom-right">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>
            <img src={aboutImage} alt="Construction" />
          </div>
        </div>
        
        <div className="what-we-do">
          <h3>What do we do?</h3>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon"><i className="fas fa-pencil-ruler"></i></div>
              <h4>Planning & Design</h4>
              <p>Innovative architectural planning and creative designs</p>
              <button className="book-now-btn" onClick={scrollToContact}>Book Now</button>
            </div>
            <div className="service-item">
              <div className="service-icon"><i className="fas fa-home"></i></div>
              <h4>Residential Construction</h4>
              <p>Building beautiful homes tailored to your needs</p>
              <button className="book-now-btn" onClick={scrollToContact}>Book Now</button>
            </div>
            <div className="service-item">
              <div className="service-icon"><i className="fas fa-building"></i></div>
              <h4>Commercial Projects</h4>
              <p>Professional commercial construction services</p>
              <button className="book-now-btn" onClick={scrollToContact}>Book Now</button>
            </div>
            <div className="service-item">
              <div className="service-icon"><i className="fas fa-tools"></i></div>
              <h4>Renovation</h4>
              <p>Expert renovation and remodeling services</p>
              <button className="book-now-btn" onClick={scrollToContact}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
