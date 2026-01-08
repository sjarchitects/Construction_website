import React, { useState, useEffect } from 'react';
import { ref, get, onValue } from 'firebase/database';
import { database } from '../../firebase/config';
import '../../styles/Footer.css';
import TermsConditions from '../sections/TermsConditions';
import PrivacyPolicy from '../sections/PrivacyPolicy';

const Footer = () => {
  const [loading, setLoading] = useState(true);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const [companySection, setCompanySection] = useState({
    title: 'IMPRIMIS Construction',
    description: 'Building your dreams with quality, professionalism, and affordability. Your trusted partner in construction excellence.'
  });

  const [socialLinks, setSocialLinks] = useState({
    facebook: 'https://facebook.com',
    instagram: 'https://www.instagram.com/imprimisbuilders?utm_source=qr&igsh=c2c0Ync5NHRmMW1q',
    youtube: 'https://youtube.com/@imprimisbuilders?si=UV0OADBu6zlJPA35',
    linkedin: 'https://linkedin.com'
  });

  const [quickLinks, setQuickLinks] = useState({
    title: 'Quick Links',
    links: [
      { text: 'Home', sectionId: 'home' },
      { text: 'About Us', sectionId: 'about' },
      { text: 'Services', sectionId: 'services' },
      { text: 'Projects', sectionId: 'projects' }
    ]
  });

  const [servicesLinks, setServicesLinks] = useState({
    title: 'Our Services',
    services: [
      { text: 'Residential Construction', sectionId: 'services' },
      { text: 'Commercial Construction', sectionId: 'services' },
      { text: 'Architectural Designing', sectionId: 'services' },
      { text: 'Structural Design', sectionId: 'services' }
    ]
  });

  const [contactInfo, setContactInfo] = useState({
    title: 'Contact Info',
    items: [
      { icon: '●', text: '1st floor, sadha shivnagar, RG complex, BH Rd, Binnamangla, Sadashiva Nagara, Nagarur, Karnataka 562123' },
      { icon: '☎', text: '+91 8310751011' },
      { icon: '☎', text: '+91 7483183724' },
      { icon: '☎', text: '+91 9113588865' },
      { icon: '✉', text: 'imprimisbuilders@gmail.com' },
      { icon: '◔', text: 'Mon - Sat: 10:00 AM - 6:30 PM' }
    ]
  });

  const [footerBottom, setFooterBottom] = useState({
    copyright: '2025 IMPRIMIS Construction. All rights reserved.',
    designedBy: 'Designed & Developed with ♥'
  });

  useEffect(() => {
    fetchFooterContent();
    
    // Set up real-time listener for live updates
    const footerRef = ref(database, 'footerContent/content');
    const unsubscribe = onValue(footerRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('🔄 Footer content real-time update:', data);
        
        if (data.companySection) setCompanySection(data.companySection);
        if (data.socialLinks) setSocialLinks(data.socialLinks);
        if (data.quickLinks) setQuickLinks(data.quickLinks);
        if (data.servicesLinks) setServicesLinks(data.servicesLinks);
        if (data.contactInfo) setContactInfo(data.contactInfo);
        if (data.footerBottom) setFooterBottom(data.footerBottom);
      }
    }, (error) => {
      console.error('❌ Footer content real-time listener error:', error);
    });

    return () => unsubscribe();
  }, []);

  const fetchFooterContent = async () => {
    try {
      console.log('🔍 Loading Footer content from Firebase...');
      const footerRef = ref(database, 'footerContent/content');
      const snapshot = await get(footerRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('✅ Footer content loaded:', data);
        
        if (data.companySection) setCompanySection(data.companySection);
        if (data.socialLinks) setSocialLinks(data.socialLinks);
        if (data.quickLinks) setQuickLinks(data.quickLinks);
        if (data.servicesLinks) setServicesLinks(data.servicesLinks);
        if (data.contactInfo) setContactInfo(data.contactInfo);
        if (data.footerBottom) setFooterBottom(data.footerBottom);
      } else {
        console.warn('⚠️ No footer content found in Firebase');
      }
    } catch (error) {
      console.error('❌ Error fetching footer content:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <footer className="footer">
        <div className="footer-container">
          <p style={{ textAlign: 'center', padding: '2rem', color: '#fff' }}>Loading...</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>{companySection.title}</h3>
            <p>{companySection.description}</p>
            <div className="social-links">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
            </div>
          </div>
          
          <div className="footer-column">
            <h4>{quickLinks.title}</h4>
            <ul>
              {quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a onClick={() => scrollToSection(link.sectionId)}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>{servicesLinks.title}</h4>
            <ul>
              {servicesLinks.services.map((service, index) => (
                <li key={index}>
                  <a onClick={() => scrollToSection(service.sectionId)}>{service.text}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>{contactInfo.title}</h4>
            <ul className="contact-list">
              {contactInfo.items.map((item, index) => (
                <li key={index}>{item.icon} {item.text}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {footerBottom.copyright}</p>
          <div className="footer-legal-links">
            <a onClick={() => setShowTerms(true)}>Terms & Conditions</a>
            <span>|</span>
            <a onClick={() => setShowPrivacy(true)}>Privacy Policy</a>
          </div>
          <p>{footerBottom.designedBy}</p>
        </div>
      </div>

      <TermsConditions isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </footer>
  );
};

export default Footer;
