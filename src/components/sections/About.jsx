import React, { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase/config';
import '../../styles/About.css';
import aboutImage from '../../assets/P1.webp';

const About = () => {
  const [loading, setLoading] = useState(true);
  const [aboutSection, setAboutSection] = useState({
    sectionTitle: 'About Us',
    mainTitle: '"Building Excellence, Crafting Trust"',
    subtitle: 'AT IMPRIMIS BUILDERS DESIGNS & CONSTRUCTIONS',
    description1: 'We are more than just a construction company - we are your partners in bringing visions to life. With decades of experience, a commitment to quality, and a passion for innovation, we specialize in delivering exceptional construction solutions tailored to your unique needs.',
    description2: 'From groundbreaking designs to flawless execution, our team of skilled professionals ensures every project is built to the highest standards of craftsmanship, sustainability, and safety. Whether it\'s a custom home, a commercial space, from a custom detailed 2D, 3D floor plans, photorealistic Elevations, interior designs, Architectural plan, UHD walkthrough & Virtual Reality experience, Structural consultancy, project management, PEB structures and end to end solution for construction management requirements.',
    image: ''
  });

  const [services, setServices] = useState([
    {
      id: 'service1',
      icon: 'fas fa-pencil-ruler',
      title: 'Planning & Design',
      description: 'Innovative architectural planning and creative designs',
      buttonText: 'Book Now'
    },
    {
      id: 'service2',
      icon: 'fas fa-home',
      title: 'Residential Construction',
      description: 'Building beautiful homes tailored to your needs',
      buttonText: 'Book Now'
    },
    {
      id: 'service3',
      icon: 'fas fa-building',
      title: 'Commercial Projects',
      description: 'Professional commercial construction services',
      buttonText: 'Book Now'
    },
    {
      id: 'service4',
      icon: 'fas fa-tools',
      title: 'Renovation',
      description: 'Expert renovation and remodeling services',
      buttonText: 'Book Now'
    }
  ]);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const dbRef = ref(database, 'about/content');
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        if (data.aboutSection) setAboutSection(data.aboutSection);
        if (data.services) setServices(data.services);
      }
    } catch (error) {
      console.error('Error loading about content:', error);
      // Continue with default values if Firebase fails
    } finally {
      setLoading(false);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="about" className="about">
        <div className="about-container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{ fontSize: '2rem', color: '#2196F3' }}>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">{aboutSection.sectionTitle}</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>{aboutSection.mainTitle}</h3>
            <h4>{aboutSection.subtitle}</h4>
            <p>{aboutSection.description1}</p>
            <p>{aboutSection.description2}</p>
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
            <img 
              src={aboutSection.image || aboutImage} 
              alt="Construction" 
            />
          </div>
        </div>
        
        <div className="what-we-do">
          <h3>What do we do?</h3>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <button className="book-now-btn" onClick={scrollToContact}>
                  {service.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
