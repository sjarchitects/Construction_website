import React, { useState } from 'react';
import '../../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Get in touch with us for your construction needs
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>We'd love to hear from you. Our team is always here to help with your construction projects.</p>
            
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4>Address</h4>
                <p>1st floor, sadha shivnagar, RG complex, BH Rd, Binnamangla, Sadashiva Nagara, Nagarur, Karnataka 562123</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
              <div>
                <h4>Phone</h4>
                <p>+91 8310751011</p>
                <p>+91 7483183724</p>
                <p>+91 9113588865</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <h4>Email</h4>
                <p>imprimisbuilders@gmail.com</p>
                <p>support@imprimisconstruction.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-clock"></i></div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Saturday: 10:00 AM - 6:30 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <a href="https://wa.me/918310751011" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <i className="fab fa-whatsapp"></i>
              Chat on WhatsApp
            </a>
          </div>
          
          <div className="contact-form">
            <h3>Send Us A Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
