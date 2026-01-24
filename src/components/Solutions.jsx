import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Solutions.css';

function Solutions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  // Open modal if query param `open` is present, or scroll to service if `service` param exists
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const openTitle = params.get('open');
    const serviceParam = params.get('service');
    
    if (openTitle) {
      const target = solutionBlocks.find(s => s.title === decodeURIComponent(openTitle));
      if (target) openModal(target);
    } else if (serviceParam) {
      // Map service param to solution block and open modal
      const serviceMap = {
        'mobility': 'Mobility - Automatic Fare Collection System',
        'entrepreneurship': 'Enterprise IT Infrastructure',
        'advisor': 'Advisory & Technical Consultancy',
        'proposal': 'Professional Services (FMS)'
      };
      const targetTitle = serviceMap[serviceParam];
      if (targetTitle) {
        const target = solutionBlocks.find(s => s.title === targetTitle);
        if (target) {
          // Small delay to ensure page is rendered before opening modal
          setTimeout(() => openModal(target), 100);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const openModal = (solution) => {
    setSelectedSolution(solution);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedSolution(null), 300);
  };

  const solutionBlocks = [
    {
      title: 'Mobility - Automatic Fare Collection System',
      desc: 'Complete AFC lifecycle services from system architecture to operational support.',
      img: '/img/solutions/mobility_afc.jpeg',
      details: 'We are experts in the design and implementation of Automatic Fare Collection (AFC) systems for metro and mass transit projects. Our services cover:\n\n▪ Product Development\n▪ Payment Application\n▪ Integration\n▪ Deployment & Commissioning\n\nWe deliver secure, scalable, and passenger-centric AFC systems, supporting smart cards, QR tickets, NCMC, and EMV open-loop payments, while ensuring seamless integration with central and back-office systems.'
    },
    {
      title: 'Enterprise IT Infrastructure',
      desc: 'Virtualization, data center modernization, and security integration solutions.',
      img: '/img/solutions/enterprise_it.jpeg',
      details: 'We deliver comprehensive IT infrastructure services using modern technologies and best practices:\n\n▪ Virtualization & High Availability\n▪ Data Center Modernization\n▪ Security Integration\n\nOur team specializes in building robust infrastructure that drives business efficiency, enhances performance, and adapts to evolving technological demands.'
    },
    {
      title: 'Advisory & Technical Consultancy',
      desc: 'Expert guidance on technology strategy, architecture, and implementation.',
      img: '/img/solutions/technical_consultancy.jpeg',
      details: 'Our technical consultants bring deep expertise in technology strategy, architecture, and best practices:\n\n▪ Product Development\n▪ Payment Application\n▪ Deployment & Commissioning\n\nWe assess your current infrastructure, identify opportunities for improvement, and provide actionable recommendations to optimize performance, security, and cost-effectiveness.'
    },
    {
      title: 'Professional Services (FMS)',
      desc: 'End-to-end project management, implementation, and talent solutions.',
      img: '/img/solutions/professional_services.jpeg',
      details: 'Comprehensive professional services covering the entire project lifecycle:\n\n▪ Solution Architecture & Design\n▪ Project Management & Implementation\n▪ Talent Solutions\n\nWe partner with you throughout, ensuring successful delivery, continuous improvement, and long-term value realization.'
    }
  ];

  return (
    <div className="solutions-page">
      <div className="solutions-hero">
        <h1 className="solutions-title" style={{borderBottomStyle: 'solid', borderBottomWidth: '0px', paddingBottom: '30px'}}>Our Services Built For Outcomes</h1>
          <p className="solutions-subtitle">
            From secure infrastructure to smart applications and devices — we design, deliver, and operate
            services that scale with your business.
          </p>
      </div>

      <main className="solutions-container">
        <section className="solutions-grid-section">
          <h2 className="section-heading" style={{marginLeft: '0px', marginBottom: '40px'}}>Our Service Areas <br/></h2>
          <div className="solutions-grid">
            {solutionBlocks.map((s, idx) => (
              <article key={idx} className="solution-block">
                <div className="solution-image-wrap">
                  <img src={s.img} alt={s.title} />
                </div>
                <h3 className="solution-block-title">{s.title}</h3>
                <p className="solution-block-text">{s.desc}</p>
                <button 
                  className="solution-cta" 
                  onClick={() => openModal(s)}
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="solutions-value-section">
          <h2 className="section-heading">How We Engage</h2>
          <div className="value-cards">
            <div className="value-card">
              <h3>Assess & Architect</h3>
              <p>Discovery-led assessments, target-state architecture, and actionable roadmaps.</p>
            </div>
            <div className="value-card">
              <h3>Implement & Migrate</h3>
              <p>Project delivery with security-by-design, automation, and documentation.</p>
            </div>
            <div className="value-card">
              <h3>Operate & Optimize</h3>
              <p>SLAs, monitoring, and continuous improvement for reliability and cost.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {modalOpen && selectedSolution && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2 className="modal-title">{selectedSolution.title}</h2>
            <div className="modal-body">
              {selectedSolution.details.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Solutions;
