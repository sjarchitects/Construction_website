import React, { useState, useEffect } from 'react';
import { ref, get, onValue } from 'firebase/database';
import { database } from '../../firebase/config';
import '../../styles/Testimonials.css';

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const [sectionHeader, setSectionHeader] = useState({
    title: 'Testimonial',
    description: 'What our clients say about us'
  });
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
    
    // Set up real-time listener for live updates
    const testimonialsRef = ref(database, 'testimonialsContent/content');
    const unsubscribe = onValue(testimonialsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('🔄 Testimonials content real-time update:', data);
        
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.testimonials) setTestimonials(data.testimonials);
      }
    }, (error) => {
      console.error('❌ Testimonials content real-time listener error:', error);
    });

    return () => unsubscribe();
  }, []);

  const fetchTestimonials = async () => {
    try {
      console.log('🔍 Loading Testimonials content from Firebase...');
      const testimonialsRef = ref(database, 'testimonialsContent/content');
      const snapshot = await get(testimonialsRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('✅ Testimonials content loaded:', data);
        
        if (data.sectionHeader) setSectionHeader(data.sectionHeader);
        if (data.testimonials) setTestimonials(data.testimonials);
      } else {
        console.warn('⚠️ No testimonials content found in Firebase');
      }
    } catch (error) {
      console.error('❌ Error fetching testimonials content:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="testimonials" className="testimonials">
        <div className="testimonials-container">
          <div className="section-header">
            <h2 className="section-title">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="testimonials">
        <div className="testimonials-container">
          <div className="section-header">
            <h2 className="section-title">{sectionHeader.title}</h2>
            <div className="title-underline"></div>
            <p className="section-description">No testimonials available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">{sectionHeader.title}</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            {sectionHeader.description}
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.useDefaultAvatar || !testimonial.avatar ? (
                    <i className="fas fa-user"></i>
                  ) : (
                    <img src={testimonial.avatar} alt={testimonial.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                  )}
                </div>
                <div className="author-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-location">
                    <i className="fas fa-map-marker-alt"></i> {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


