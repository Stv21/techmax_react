import { useState, useRef, useEffect } from 'react';
import './About.css';

function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isExpanded && buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  }, [isExpanded]);

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>
        <div className="about-content-wrapper">
          <div className="about-text-content">
            <p className="about-description">
              We are a technology-driven AFC solutions provider specializing in Automatic Fare Collection systems for metro and urban transit networks. With over a decade of experience, SAARTECH delivers turnkey solutions from system design to ongoing maintenance.
            </p>
            
            {isExpanded && (
              <div className="expanded-content">
                <p className="about-description">
                  Our strength lies in combining deep technical expertise with on-ground execution capability, supporting transit authorities in building reliable and future-ready fare collection ecosystems.
                </p>
                <p className="about-description">
                  We pride ourselves on delivering solutions that address unique transit challenges. Our team brings together knowledge in software development, hardware integration, network architecture, and operational management.
                </p>
                <p className="about-description">
                  Through strategic partnerships with leading technology providers and ongoing investment in R&D, we remain at the forefront of fare collection innovation.
                </p>
              </div>
            )}
          </div>
          
          <div className="founder-section">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop" 
              alt="Founder" 
              className="founder-image" 
            />
            <h3 className="founder-name">Sachin Kumar</h3>
            <p className="founder-title">Founder & CEO</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <button 
            ref={buttonRef}
            className="know-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Know More'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
