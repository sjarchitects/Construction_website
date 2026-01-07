import React from 'react';
import Navbar from './common/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Stats from './sections/Stats';
import Packages from './sections/Packages';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './common/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Dashboard;
