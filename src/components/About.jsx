import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>
        <div className="about-content-wrapper">
          <div className="about-text-content">
            <p className="about-description">
              We are a technology-driven AFC solutions provider specializing in Automatic Fare Collection systems for metro and urban transit networks. With over a decade of experience, SAARTECH delivers turnkey solutions from system design to ongoing maintenance.
            </p>
            
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
          </div>
          
          <div className="founder-section">
            <img 
              src="img/founder.png" 
              alt="Brijesh Sharma" 
              className="founder-image" 
            />
            <h3 className="founder-name">Brijesh Sharma</h3>
            <p className="founder-title">Founder & CEO</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <Link to="/company#about-us" className="know-more-btn">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
