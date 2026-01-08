import { useState } from 'react';
import './About.css';

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About SAARTECH</h2>
        <p className="about-description">
          We are a technology-driven AFC solutions provider specializing in the design, development, and execution of Automatic Fare Collection systems for metro, BRT, and urban transit networks.

Our strength lies in combining deep technical expertise with on-ground execution capability. From AFC system architecture and software platforms to control center infrastructure and full lifecycle project delivery, we support transit authorities in building reliable, secure, and future-ready fare collection ecosystems.

We operate with a clear focus on performance, compliance, and operational continuity, ensuring AFC systems remain dependable throughout their revenue lifecycle.
        </p>
        
        {isExpanded && (
          <div className="expanded-content">
            <p className="about-description">
              With over a decade of experience in the industry, SAARTECH has established itself as a trusted partner for urban transit modernization. Our comprehensive approach encompasses every aspect of fare collection technology, from initial system design and integration to ongoing maintenance and support.
            </p>
            <p className="about-description">
              We pride ourselves on our ability to deliver turnkey solutions that address the unique challenges of each transit environment. Our team of experts brings together knowledge in software development, hardware integration, network architecture, and operational management to create systems that not only meet today's needs but are scalable for tomorrow's innovations.
            </p>
            <p className="about-description">
              Our commitment extends beyond implementation. We provide comprehensive training programs, 24/7 technical support, and continuous system monitoring to ensure optimal performance. Through strategic partnerships with leading technology providers and ongoing investment in research and development, we remain at the forefront of fare collection innovation.
            </p>
          </div>
        )}
        
        <button 
          className="know-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Know More'}
        </button>
      </div>
    </section>
  );
}

export default About;
