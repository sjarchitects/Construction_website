import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>IMPRIMIS Construction</h3>
            <p>Building your dreams with quality, professionalism, and affordability. Your trusted partner in construction excellence.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Our Services</h4>
            <ul>
              <li><a onClick={() => scrollToSection('services')}>House Construction</a></li>
              <li><a onClick={() => scrollToSection('services')}>Building Construction</a></li>
              <li><a onClick={() => scrollToSection('services')}>Interior Design</a></li>
              <li><a onClick={() => scrollToSection('services')}>Renovation</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>● 123 Construction Avenue, Bangalore, Karnataka - 560001</li>
              <li>☎ +91 8310751011 / +91 7483183724 / +91 9113588865</li>
              <li>✉ info@imprimisconstruction.com</li>
              <li>◔ Mon - Sat: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 IMPRIMIS Construction. All rights reserved.</p>
          <p>Designed & Developed with ♥</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
