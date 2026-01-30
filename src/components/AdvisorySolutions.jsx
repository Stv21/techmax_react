import { useEffect } from 'react';
import './Solutions.css';

function AdvisorySolutions() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="solutions-page">
      <div className="solutions-hero">
        <div className="solutions-hero-content">
          <h1 className="solutions-title">Advisory & Technical Consultancy</h1>
          <p className="solutions-subtitle">
            Expert guidance and strategic consulting for technology transformation
          </p>
        </div>
      </div>

      <main className="solutions-container">
        <section className="solutions-grid-section">
          <div className="solutions-grid">
            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" alt="Digital Transformation" />
              </div>
              <h3 className="solution-block-title">Digital Transformation</h3>
              <p className="solution-block-text">
                Strategic roadmap development for digital initiatives and technology modernization.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" alt="Technology Assessment" />
              </div>
              <h3 className="solution-block-title">Technology Assessment</h3>
              <p className="solution-block-text">
                Comprehensive evaluation of current systems and recommendations for improvement.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" alt="Architecture Design" />
              </div>
              <h3 className="solution-block-title">Architecture Design</h3>
              <p className="solution-block-text">
                System architecture planning and design for scalable, secure solutions.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="Compliance Consulting" />
              </div>
              <h3 className="solution-block-title">Compliance Consulting</h3>
              <p className="solution-block-text">
                Regulatory compliance guidance and implementation support for various standards.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-value-section">
          <h2 className="section-heading">Consulting Services</h2>
          <div className="value-cards">
            <div className="value-card">
              <h3>Strategic Planning</h3>
              <p>Long-term technology strategy development aligned with business objectives.</p>
            </div>
            <div className="value-card">
              <h3>Risk Assessment</h3>
              <p>Comprehensive risk analysis and mitigation strategies for technology investments.</p>
            </div>
            <div className="value-card">
              <h3>Performance Optimization</h3>
              <p>System performance analysis and optimization recommendations.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdvisorySolutions;