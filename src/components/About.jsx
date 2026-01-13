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
              We are a technology-driven AFC solutions provider specializing in the design, development, and execution of Automatic Fare Collection systems for metro, BRT, and urban transit networks. Our strength lies in combining deep technical expertise with on-ground execution capability, supporting transit authorities in building reliable, secure, and future-ready fare collection ecosystems.
            </p>
            <p className="about-description">
              With over a decade of experience in the industry, SAARTECH has established itself as a trusted partner for urban transit modernization. Our comprehensive approach encompasses every aspect of fare collection technology, from initial system design and integration to ongoing maintenance and support.
            </p>
            <p className="about-description">
              We pride ourselves on our ability to deliver turnkey solutions that address the unique challenges of each transit environment. Our team of experts brings together knowledge in software development, hardware integration, network architecture, and operational management.
            </p>
            
            {isExpanded && (
              <div className="expanded-content">
                <p className="about-description">
                  Through strategic partnerships with leading technology providers and ongoing investment in research and development, we remain at the forefront of fare collection innovation.
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
