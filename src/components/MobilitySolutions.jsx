import { useEffect } from 'react';
import './Solutions.css';

function MobilitySolutions() {
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
          <h1 className="solutions-title">Mobility - Automatic Fare Collection System</h1>
          <p className="solutions-subtitle">
            Advanced AFC solutions for seamless urban mobility and efficient transit operations
          </p>
        </div>
      </div>

      <main className="solutions-container">
        <section className="solutions-grid-section">
          <div className="solutions-grid">
            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop" alt="Metro AFC Systems" />
              </div>
              <h3 className="solution-block-title">Metro AFC Systems</h3>
              <p className="solution-block-text">
                Complete AFC solutions for metro and light rail systems with multi-modal payment integration.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop" alt="BRT Integration" />
              </div>
              <h3 className="solution-block-title">BRT Integration</h3>
              <p className="solution-block-text">
                Bus Rapid Transit fare collection systems with real-time data and passenger flow management.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" alt="Multi-Modal Payments" />
              </div>
              <h3 className="solution-block-title">Multi-Modal Payments</h3>
              <p className="solution-block-text">
                Support for contactless cards, mobile payments, QR codes, and NFC technology.
              </p>
            </div>

            <div className="solution-block">
              <div className="solution-image-wrap">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" alt="IoT Gateways" />
              </div>
              <h3 className="solution-block-title">IoT Gateways</h3>
              <p className="solution-block-text">
                Smart entry/exit gates with real-time telemetry and automated fare validation.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-value-section">
          <h2 className="section-heading">Key Features</h2>
          <div className="value-cards">
            <div className="value-card">
              <h3>Real-Time Processing</h3>
              <p>Instant transaction processing with sub-second validation for smooth passenger flow.</p>
            </div>
            <div className="value-card">
              <h3>Multi-Payment Support</h3>
              <p>Seamless integration with EMV, NFC, QR codes, and mobile wallet payments.</p>
            </div>
            <div className="value-card">
              <h3>Data Analytics</h3>
              <p>Comprehensive reporting and analytics for operational insights and revenue optimization.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MobilitySolutions;