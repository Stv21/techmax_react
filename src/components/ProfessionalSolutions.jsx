import { useEffect } from 'react';
import './Solutions.css';

function ProfessionalSolutions() {
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
          <h1 className="solutions-title">Professional Services (FMS)</h1>
          <p className="solutions-subtitle">
            End-to-end implementation and managed services for comprehensive solutions
          </p>
        </div>
      </div>

      <main className="solutions-container">
        <section className="solutions-grid-section">
          <div className="solutions-grid">
            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" alt="System Implementation" />
              </div>
              <h3 className="solution-block-title">System Implementation</h3>
              <p className="solution-block-text">
                Full-cycle implementation from planning to deployment and user training.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" alt="Managed Services" />
              </div>
              <h3 className="solution-block-title">Managed Services</h3>
              <p className="solution-block-text">
                24/7 monitoring, maintenance, and support for optimal system performance.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=600&fit=crop" alt="Staff Augmentation" />
              </div>
              <h3 className="solution-block-title">Staff Augmentation</h3>
              <p className="solution-block-text">
                Skilled technical professionals to supplement your internal teams.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="Quality Assurance" />
              </div>
              <h3 className="solution-block-title">Quality Assurance</h3>
              <p className="solution-block-text">
                Comprehensive testing and quality control for reliable system delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-value-section">
          <h2 className="section-heading">Service Excellence</h2>
          <div className="value-cards">
            <div className="value-card">
              <h3>End-to-End Delivery</h3>
              <p>Complete project lifecycle management from concept to operational handover.</p>
            </div>
            <div className="value-card">
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical support and system monitoring services.</p>
            </div>
            <div className="value-card">
              <h3>Knowledge Transfer</h3>
              <p>Comprehensive training and documentation for sustainable operations.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfessionalSolutions;