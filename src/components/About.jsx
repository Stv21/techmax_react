import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Sharteck</h2>
        <p className="about-description">
          With a proven portfolio of IT Solutions & Services, Saartech has been delivering IT Infrastructure- Products, Services & Solutions and Business Software Solutions to a wide range of industry verticals including - Banking and Financial Services, Retail Distribution, Pharmaceuticals, Utilities and Real Estate. It's ready to deploy product portfolio comprises of turnkey IT Solutions that help new age businesses leverage varied sets of business data and information.
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
