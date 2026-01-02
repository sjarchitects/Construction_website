import React from 'react';
import '../../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      text: 'We got to know about IMPRIMIS Construction when we visited our friend\'s new house. When we approached them for the construction of our house we received a professional response right from planning to implementation. The team is very professional and open to feedback. Thanks for the quality work.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      location: 'Hyderabad',
      text: 'Had visited IMPRIMIS Construction with my spouse for planning of house. Experienced very good customer value. The Engineer who explained the planning & construction packages was also very polite towards us. Very good & attractive packages offered.',
      rating: 5
    },
    {
      name: 'Arun Patel',
      location: 'Chennai',
      text: 'I want to express my appreciation for the excellent service provided by IMPRIMIS Construction. The project was extremely successful, their professionalism shows in quality of work & best customer service.',
      rating: 5
    },
    {
      name: 'Meera Reddy',
      location: 'Pune',
      text: 'Outstanding construction services! The team was punctual, professional, and delivered exactly what they promised. Our dream home became a reality thanks to their expertise and dedication.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            What our clients say about us
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
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
