import React, { useState, useEffect } from 'react';
import '../../styles/Navbar.css';
import logo from '../../assets/image-1767417425342.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="IMPRIMIS Construction" />
        </div>
        
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('services')} className="nav-link">Services</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <a onClick={() => scrollToSection('testimonials')} className="nav-link">Reviews</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
