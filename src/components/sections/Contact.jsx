import React, { useState, useEffect } from 'react';
import { ref, get, push, onValue } from 'firebase/database';
import { database } from '../../firebase/config';
import '../../styles/Contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [sectionHeader, setSectionHeader] = useState({
    title: 'Contact Us',
    description: 'Get in touch with us for your construction needs'
  });

  const [contactInfo, setContactInfo] = useState({
    getInTouchTitle: 'Get In Touch',
    getInTouchDescription: 'We\'d love to hear from you. Our team is always here to help with your construction projects.',
    address: {
      title: 'Address',
      line1: '1st floor, sadha shivnagar, RG complex, BH Rd',
      line2: 'Binnamangla, Sadashiva Nagara, Nagarur',
      line3: 'Karnataka 562123'
    },
    phones: {
      title: 'Phone',
      numbers: ['+91 8310751011', '+91 7483183724', '+91 9113588865']
    },
    emails: {
      title: 'Email',
      addresses: ['imprimisbuilders@gmail.com', 'support@imprimisconstruction.com']
    },
    workingHours: {
      title: 'Working Hours',
      weekdays: 'Monday - Saturday: 10:00 AM - 6:30 PM',
      weekend: 'Sunday: Closed'
    },
    whatsapp: {
      number: '918310751011',
      displayText: 'Chat on WhatsApp'
    }
  });

  const [formSettings, setFormSettings] = useState({
    formTitle: 'Send Us A Message',
    showNameField: true,
    showEmailField: true,
    showPhoneField: true,
    showMessageField: true,
    submitButtonText: 'Send Message',
    successMessage: 'Thank you for contacting us! We will get back to you soon.'
  });

  useEffect(() => {
    fetchContactContent();
    
    // Set up real-time listener for live updates
    const contentRef = ref(database, 'contactContent/content');
    const unsubscribe = onValue(contentRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('🔄 Contact content real-time update:', data);
        
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.contactInfo) setContactInfo(data.contactInfo);
        if (data.formSettings) setFormSettings(data.formSettings);
      }
    }, (error) => {
      console.error('❌ Contact content real-time listener error:', error);
    });

    return () => unsubscribe();
  }, []);

  const fetchContactContent = async () => {
    try {
      console.log('🔍 Loading Contact content from Firebase...');
      const contentRef = ref(database, 'contactContent/content');
      const snapshot = await get(contentRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('✅ Contact content loaded:', data);
        
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.contactInfo) setContactInfo(data.contactInfo);
        if (data.formSettings) setFormSettings(data.formSettings);
      } else {
        console.warn('⚠️ No contact content found in Firebase');
      }
    } catch (error) {
      console.error('❌ Error fetching contact content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const contactData = {
        ...formData,
        status: 'pending',
        createdAt: Date.now(),
        timestamp: new Date().toISOString()
      };

      await push(ref(database, 'Contact Inquiries'), contactData);
      
      alert(formSettings.successMessage);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">{sectionHeader.title}</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            {sectionHeader.description}
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>{contactInfo.getInTouchTitle}</h3>
            <p>{contactInfo.getInTouchDescription}</p>
            
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4>{contactInfo.address.title}</h4>
                <p>{contactInfo.address.line1}</p>
                <p>{contactInfo.address.line2}</p>
                <p>{contactInfo.address.line3}</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
              <div>
                <h4>{contactInfo.phones.title}</h4>
                {contactInfo.phones.numbers.map((phone, index) => (
                  <p key={index}>{phone}</p>
                ))}
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <h4>{contactInfo.emails.title}</h4>
                {contactInfo.emails.addresses.map((email, index) => (
                  <p key={index}>{email}</p>
                ))}
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><i className="fas fa-clock"></i></div>
              <div>
                <h4>{contactInfo.workingHours.title}</h4>
                <p>{contactInfo.workingHours.weekdays}</p>
                <p>{contactInfo.workingHours.weekend}</p>
              </div>
            </div>

            <a 
              href={`https://wa.me/${contactInfo.whatsapp.number}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn"
            >
              <i className="fab fa-whatsapp"></i>
              {contactInfo.whatsapp.displayText}
            </a>
          </div>
          
          <div className="contact-form">
            <h3>{formSettings.formTitle}</h3>
            <form onSubmit={handleSubmit}>
              {formSettings.showNameField && (
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
              )}
              
              {formSettings.showEmailField && (
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
              )}
              
              {formSettings.showPhoneField && (
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
              )}
              
              {formSettings.showMessageField && (
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
              )}
              
              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? 'Sending...' : formSettings.submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
