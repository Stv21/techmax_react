import { useEffect } from 'react';
import './Solutions.css';

function EnterpriseSolutions() {
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
          <h1 className="solutions-title">Enterprise IT Infrastructure</h1>
          <p className="solutions-subtitle">
            Scalable and secure IT infrastructure solutions for modern enterprises
          </p>
        </div>
      </div>

      <main className="solutions-container">
        <section className="solutions-grid-section">
          <div className="solutions-grid">
            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=600&fit=crop" alt="Cloud Infrastructure" />
              </div>
              <h3 className="solution-block-title">Cloud Infrastructure</h3>
              <p className="solution-block-text">
                Hybrid cloud solutions with automated scaling and disaster recovery capabilities.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop" alt="Data Center Solutions" />
              </div>
              <h3 className="solution-block-title">Data Center Solutions</h3>
              <p className="solution-block-text">
                High-performance data centers with redundant power and cooling systems.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="Network Security" />
              </div>
              <h3 className="solution-block-title">Network Security</h3>
              <p className="solution-block-text">
                Advanced cybersecurity with zero-trust architecture and threat intelligence.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="DevOps Automation" />
              </div>
              <h3 className="solution-block-title">DevOps Automation</h3>
              <p className="solution-block-text">
                CI/CD pipelines and infrastructure automation for faster deployment cycles.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-value-section">
          <h2 className="section-heading">Infrastructure Benefits</h2>
          <div className="value-cards">
            <div className="value-card">
              <h3>99.9% Uptime</h3>
              <p>Enterprise-grade reliability with redundant systems and proactive monitoring.</p>
            </div>
            <div className="value-card">
              <h3>Scalable Architecture</h3>
              <p>Auto-scaling infrastructure that grows with your business needs.</p>
            </div>
            <div className="value-card">
              <h3>Cost Optimization</h3>
              <p>Right-sizing resources and optimizing cloud spending for maximum ROI.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EnterpriseSolutions;