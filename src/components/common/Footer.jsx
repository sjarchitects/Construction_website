import React, { useState } from 'react';
import '../../styles/Footer.css';
import TermsConditions from '../sections/TermsConditions';
import PrivacyPolicy from '../sections/PrivacyPolicy';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

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
              <a href="https://www.instagram.com/imprimisbuilders?utm_source=qr&igsh=c2c0Ync5NHRmMW1q" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com/@imprimisbuilders?si=UV0OADBu6zlJPA35" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
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
              <li><a onClick={() => scrollToSection('services')}>Residential Construction</a></li>
              <li><a onClick={() => scrollToSection('services')}>Commercial Construction</a></li>
              <li><a onClick={() => scrollToSection('services')}>Architectural Designing</a></li>
              <li><a onClick={() => scrollToSection('services')}>Structural Design</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>● 1st floor, sadha shivnagar, RG complex, BH Rd, Binnamangla, Sadashiva Nagara, Nagarur, Karnataka 562123</li>
              <li>☎ +91 8310751011</li>
              <li>☎ +91 7483183724</li>
              <li>☎ +91 9113588865</li>
              <li>✉ imprimisbuilders@gmail.com</li>
              <li>◔ Mon - Sat: 10:00 AM - 6:30 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 IMPRIMIS Construction. All rights reserved.</p>
          <div className="footer-legal-links">
            <a onClick={() => setShowTerms(true)}>Terms & Conditions</a>
            <span>|</span>
            <a onClick={() => setShowPrivacy(true)}>Privacy Policy</a>
          </div>
          <p>Designed & Developed with ♥</p>
        </div>
      </div>

      <TermsConditions isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </footer>
  );
};

export default Footer;
