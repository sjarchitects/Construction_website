import React from 'react';
import '../../styles/Hero.css';
import heroBg from '../../assets/P1.webp';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" style={{backgroundImage: `url(${heroBg})`}}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span>IMPRIMIS BUILDERS DESIGNS &  CONSTRUCTIONS</span>
        </h1>
        <p className="hero-subtitle">
          We build your love 
        </p>
        <button className="hero-btn" onClick={scrollToContact}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
