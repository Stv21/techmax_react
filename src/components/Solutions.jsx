import { useEffect } from 'react';
import './Solutions.css';

function Solutions() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const solutionBlocks = [
    {
      title: 'System Design',
      desc: 'Protecting infrastructure, endpoints, data, and identities with modern controls, SOC, and zero-trust design.',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
    },
    {
      title: 'Software Development',
      desc: 'Hybrid cloud, data center, and network upgrades for scalable, reliable foundations.',
      img: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=600&fit=crop'
    },
    {
      title: 'Product Development',
      desc: 'Platforms and custom apps to streamline operations and decision-making with analytics.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      title: 'System Implementation and Execution',
      desc: 'IoT devices and edge systems for real-time telemetry and automation.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
    },
    {
      title: 'Technical Consultancy',
      desc: 'Secure, managed access across devices and locations for a productive workforce.',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    },
    {
      title: 'Professional Services',
      desc: 'Consulting, implementation, and managed services to deliver outcomes end-to-end.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className="solutions-page">
      <div className="solutions-hero">
        <h1 className="solutions-title" style={{borderBottomStyle: 'solid', borderBottomWidth: '0px', paddingBottom: '30px'}}>Solutions Built For Outcomes</h1>
          <p className="solutions-subtitle">
            From secure infrastructure to smart applications and devices — we design, deliver, and operate
            solutions that scale with your business.
          </p>
      </div>

      <main className="solutions-container">
        <section className="solutions-grid-section">
          <h2 className="section-heading" style={{marginLeft: '0px', marginBottom: '20px'}}>Our Solution Areas <br/></h2>
          <div className="solutions-grid">
            {solutionBlocks.map((s, idx) => (
              <article key={idx} className="solution-block">
                <div className="solution-image-wrap">
                  <img src={s.img} alt={s.title} />
                </div>
                <h3 className="solution-block-title">{s.title}</h3>
                <p className="solution-block-text">{s.desc}</p>
                <a className="solution-cta" href="#contact">Talk to us</a>
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
    </div>
  );
}

export default Solutions;
