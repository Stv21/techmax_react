import React from 'react';
import '../styles.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>
        <div className="about-content-wrapper short-about">
          <div className="about-text-content">
            <p className="about-description compact">
              We power next-generation fare collection systems, streamlining ticketing, validation, and business logic so operators can deliver seamless, high-performance fare collection experiences at scale.
            </p>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <a className="hero-read-more-btn" href="/company" data-discover="true">Know More</a>
        </div>
      </div>
    </section>
  );
}

export default About;
