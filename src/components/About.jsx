import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About SAARTECH</h2>
        <p className="about-description">
          We are a technology-driven AFC solutions provider specializing in the design, development, and execution of Automatic Fare Collection systems for metro, BRT, and urban transit networks.

Our strength lies in combining deep technical expertise with on-ground execution capability. From AFC system architecture and software platforms to control center infrastructure and full lifecycle project delivery, we support transit authorities in building reliable, secure, and future-ready fare collection ecosystems.

We operate with a clear focus on performance, compliance, and operational continuity, ensuring AFC systems remain dependable throughout their revenue lifecycle.
        </p>
        <button className="know-more-btn">Know More</button>
        
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">✓</div>
            <p className="feature-text">Super fast & reliable</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💬</div>
            <p className="feature-text">24 Hour Support</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <p className="feature-text">We Get the Results</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
