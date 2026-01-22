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

  // Open modal if query param `open` is present
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const openTitle = params.get('open');
    if (openTitle) {
      const target = solutionBlocks.find(s => s.title === decodeURIComponent(openTitle));
      if (target) openModal(target);
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
      title: 'System Design',
      desc: 'Protecting infrastructure, endpoints, data, and identities with modern controls, SOC, and zero-trust design.',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      details: 'We are experts in the design and implementation of Automatic Fare Collection (AFC) systems for metro and mass transit projects. Our services cover the complete AFC lifecycle, from system architecture and equipment integration to testing, commissioning, and operational support.\n\nWe deliver secure, scalable, and passenger-centric AFC systems, supporting smart cards, QR tickets, NCMC, and EMV open-loop payments, while ensuring seamless integration with central and back-office systems.\n\nWith proven experience in metro environments, we enable reliable fare management, efficient operations, and smooth passenger flow.'
    },
    {
      title: 'Software Development',
      desc: 'Hybrid cloud, data center, and network upgrades for scalable, reliable foundations.',
      img: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=600&fit=crop',
      details: 'We deliver custom software services using modern development practices, agile methodologies, and cutting-edge technologies. Our team specializes in building robust applications that drive business efficiency, enhance user experiences, and adapt to evolving market demands.'
    },
    {
      title: 'Product Development',
      desc: 'Platforms and custom apps to streamline operations and decision-making with analytics.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      details: 'From concept to launch, we guide your product development journey with strategic planning, user-centered design, and iterative development. Our expertise spans mobile apps, web platforms, and enterprise software, ensuring your product meets market needs and exceeds user expectations.'
    },
    {
      title: 'System Implementation and Execution',
      desc: 'IoT devices and edge systems for real-time telemetry and automation.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      details: 'Expert implementation services ensure smooth deployment of complex systems with minimal disruption. We handle installation, configuration, testing, and migration while providing comprehensive training and documentation for seamless adoption across your organization.'
    },
    {
      title: 'Technical Consultancy',
      desc: 'Secure, managed access across devices and locations for a productive workforce.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      details: 'Our technical consultants bring deep expertise in technology strategy, architecture, and best practices. We assess your current infrastructure, identify opportunities for improvement, and provide actionable recommendations to optimize performance, security, and cost-effectiveness.'
    },
    {
      title: 'Professional Services',
      desc: 'Consulting, implementation, and managed services to deliver outcomes end-to-end.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      details: 'Comprehensive professional services covering project management, business analysis, quality assurance, and ongoing support. We partner with you throughout the entire lifecycle, ensuring successful delivery, continuous improvement, and long-term value realization.'
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
