import React, { useState, useEffect } from 'react';
import { ref, get, onValue } from 'firebase/database';
import { database } from '../../firebase/config';
import '../../styles/Packages.css';

const Packages = () => {
  const [loading, setLoading] = useState(true);
  const [sectionHeader, setSectionHeader] = useState({
    title: 'Our Packages',
    description: 'Choose the perfect package for your dream home',
    note: 'Note: Prices may vary based on client requirements and location'
  });
  const [packageCards, setPackageCards] = useState([]);

  useEffect(() => {
    fetchPackages();
    
    // Set up real-time listener for live updates
    const packagesRef = ref(database, 'packagesContent/content');
    const unsubscribe = onValue(packagesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('🔄 Packages content real-time update:', data);
        
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.packageCards) setPackageCards(data.packageCards);
      }
    }, (error) => {
      console.error('❌ Packages content real-time listener error:', error);
    });

    return () => unsubscribe();
  }, []);

  const fetchPackages = async () => {
    try {
      console.log('🔍 Loading Packages content from Firebase...');
      const packagesRef = ref(database, 'packagesContent/content');
      const snapshot = await get(packagesRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('✅ Packages content loaded:', data);
        
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.packageCards) setPackageCards(data.packageCards);
      } else {
        console.warn('⚠️ No packages content found in Firebase');
      }
    } catch (error) {
      console.error('❌ Error fetching packages content:', error);
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
      <section id="packages" className="packages">
        <div className="packages-container">
          <div className="section-header">
            <h2 className="section-title">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (!packageCards || packageCards.length === 0) {
    return (
      <section id="packages" className="packages">
        <div className="packages-container">
          <div className="section-header">
            <h2 className="section-title">{sectionHeader.title}</h2>
            <div className="title-underline"></div>
            <p className="section-description">No packages available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="packages">
      <div className="packages-container">
        <div className="section-header">
          <h2 className="section-title">{sectionHeader.title}</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            {sectionHeader.description}
          </p>
          {sectionHeader.note && (
            <p className="package-note">
              {sectionHeader.note}
            </p>
          )}
        </div>
        
        <div className="packages-grid">
          {packageCards.map((card) => (
            <div key={card.id} className="package-card">
              <div className="package-icon">
                {card.iconType === 'image' && card.iconImage ? (
                  <img src={card.iconImage} alt={card.name} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                ) : card.icon ? (
                  <i className={card.icon}></i>
                ) : (
                  <i className="fas fa-box"></i>
                )}
              </div>
              <h3 className="package-name">{card.name}</h3>
              <div className="package-price">Starts @ {card.price}</div>
              {card.subtitle && <p className="package-subtitle">{card.subtitle}</p>}
              <button className="package-btn" onClick={scrollToContact}>
                {card.buttonText || 'KNOW MORE'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
