import React, { useState, useEffect } from 'react';
import { ref, get, onValue } from 'firebase/database';
import { database } from '../../firebase/config';
import '../../styles/Services.css';

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [sectionHeader, setSectionHeader] = useState({
    title: 'Our Services',
    description: 'Comprehensive construction solutions for all your building needs'
  });
  const [serviceCards, setServiceCards] = useState([]);

  useEffect(() => {
    fetchServices();
    
    // Set up real-time listener for live updates
    const servicesRef = ref(database, 'servicesContent/content');
    const unsubscribe = onValue(servicesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('🔄 Services content real-time update:', data);
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.serviceCards) setServiceCards(data.serviceCards);
      }
    }, (error) => {
      console.error('❌ Services content real-time listener error:', error);
    });

    return () => unsubscribe();
  }, []);

  const fetchServices = async () => {
    try {
      console.log('🔍 Loading Services content from Firebase...');
      const servicesRef = ref(database, 'servicesContent/content');
      const snapshot = await get(servicesRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('✅ Services content loaded:', data);
        
        if (data.sectionHeader) {
          setSectionHeader(data.sectionHeader);
        }
        if (data.serviceCards) {
          setServiceCards(data.serviceCards);
        }
      } else {
        console.warn('⚠️ No services content found in Firebase');
      }
    } catch (error) {
      console.error('❌ Error fetching services content:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="services" className="services">
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (!serviceCards || serviceCards.length === 0) {
    return (
      <section id="services" className="services">
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">{sectionHeader.title}</h2>
            <div className="title-underline"></div>
            <p className="section-description">No services available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">{sectionHeader.title}</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            {sectionHeader.description}
          </p>
        </div>
        
        <div className="services-grid">
          {serviceCards.map((card) => (
            <div key={card.id} className="service-card">
              <div className="service-icon-box">
                {card.iconType === 'image' && card.iconImage ? (
                  <img src={card.iconImage} alt={card.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                ) : card.icon ? (
                  <i className={card.icon}></i>
                ) : (
                  <i className="fa-solid fa-tools"></i>
                )}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
