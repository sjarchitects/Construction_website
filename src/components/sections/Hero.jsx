import React, { useState, useEffect } from 'react';
import { ref, get, onValue } from 'firebase/database';
import { database } from '../../firebase/config';
import '../../styles/Hero.css';

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [heroSection, setHeroSection] = useState(null);

  useEffect(() => {
    loadContent();
    
    // Set up real-time listener for live updates
    const dbRef = ref(database, 'home/content/heroSection');
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('🔄 Real-time update received:', data);
        setHeroSection(data);
      }
    }, (error) => {
      console.error('❌ Real-time listener error:', error);
    });

    return () => unsubscribe();
  }, []);

  const loadContent = async () => {
    try {
      console.log('🔍 Loading Hero content from Firebase...');
      console.log('🔗 Database URL:', database.app.options.databaseURL);
      
      const dbRef = ref(database, 'home/content/heroSection');
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('✅ Hero section data loaded:', data);
        console.log('📷 Background image URL:', data.backgroundImage);
        setHeroSection(data);
      } else {
        console.warn('⚠️ No data at home/content/heroSection');
      }
    } catch (error) {
      console.error('❌ Error loading hero content:', error);
      console.error('Error details:', error.message);
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

  if (loading || !heroSection) {
    return (
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: '#fff' }}>Loading...</div>
        </div>
      </section>
    );
  }

  console.log('🎨 Current Hero Section State:', heroSection);
  console.log('🖼️ Background image URL:', heroSection.backgroundImage);

  return (
    <section 
      id="home" 
      className="hero" 
      style={{backgroundImage: `url(${heroSection.backgroundImage})`}}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          {heroSection.titlePart1} <span>{heroSection.titlePart2}</span>
        </h1>
        <p className="hero-subtitle">
          {heroSection.subtitle}
        </p>
        <button className="hero-btn" onClick={scrollToContact}>
          {heroSection.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
