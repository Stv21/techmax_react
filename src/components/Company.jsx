import { useEffect, useState } from 'react';
import './Company.css';

function Company() {
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const scrollToWithHeaderOffset = (element, extra = 12) => {
      if (!element) return;
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 70;
      const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - extra;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    };

    // Auto-scroll behaviour: enable only for desktop (non-touch, pointer: fine)
    const isDesktopAutoScroll = () => {
      try {
        const hasFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
        const notTouch = !('ontouchstart' in window) && !navigator.maxTouchPoints;
        return window.innerWidth > 768 && hasFinePointer && notTouch;
      } catch (e) {
        return window.innerWidth > 768;
      }
    };

    // Check if there's a hash in the URL
    const hash = window.location.hash;
    
    if (hash && isDesktopAutoScroll()) {
      // If there's a hash, scroll to that section on desktop only
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          scrollToWithHeaderOffset(element);
        }
      }, 100);
    } else {
      // If no hash or on mobile, reset scroll to top but avoid JS-driven auto-scroll on touch devices
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      if (isDesktopAutoScroll()) {
        const timer = setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const teamMembers = [
    {
      name: "Brijesh Sharma",
      role: "Chief Executive Officer",
      image: "/img/founder.png"
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Innovation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="company-page">
      <div className="company-container">
        {/* About Us Section */}
        <section id="about-us" className="company-section">
          <h2 className="section-heading">About Us</h2>
          <div className="company-about-wrapper">
            <div className="company-about-text">
              <p className="company-description">
              
                We are a technology-driven IT solutions company specializing in advanced fare collection systems and IT infrastructure management for modern transit ecosystems. With deep domain expertise and an agile delivery approach, we enable transit authorities to deploy future-ready solutions that operate seamlessly, enhance passenger mobility, and improve operational efficiency and reliability. By combining strong technical capability with proven on-ground execution, we deliver smart, secure, scalable, and resilient Automatic Fare Collection systems<span className="hide-on-mobile">, driven by continuous innovation and strategic technology partnerships</span>.
              </p>
              {readMore && (
                <div className="company-description-expanded" key="expanded-content">
                  <p>
                    SaarTech Solutions a group of professionals having vivid experience and wide exposure with complex and mission critical project in IT and Transportation domain. A growing company in system design, development, execution and commissioning for fare collection system and Toll management system.  We bring deep expertise in the end-to-end Supply, Installation, Testing, and Commissioning (ITC) of Automatic Fare Collection systems for complex metro and urban transit environments. Our teams execute precise field installations, seamless system integration, and rigorous multi-stage testing to ensure every component performs reliably under real-world operating conditions. From hardware deployment and network configuration to software validation and operational readiness, we ensure systems are commissioned on schedule, compliant with specifications, and ready for uninterrupted passenger service. Wide portfolio of solutions and services covering value chain engineering to execution & implementation, technical consultancy, design assistance and operation & Maintenance. Team of qualified Technical engineering graduates and business experts. Wants to establish ourselves as the best choice in Computing and Information Technology Services, Consultancy and Development by offering the full spectrum of services
                  </p>
                 
                </div>
              )}
              <button 
                className="read-more-btn"
                onClick={() => {
                  console.log('Button clicked, current state:', readMore);
                  setReadMore(!readMore);
                }}
                key="read-more-button"
                
              >
                {readMore ? 'Read Less' : 'Read More'} 
              </button>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission-vision" className="company-section mission-vision-section">
          <div className="mission-vision-grid">
            <div className="vision-card">
              <img src="/img/vision.png" alt="Vision" className="card-icon-img" />
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To shape the future of urban mobility by enabling seamless and secure fare collection experiences that make public transport simpler, smarter, and more inclusive for everyone.
              </p>
            </div>

            <div className="mission-card">
              <img src="/img/mission.png" alt="Mission" className="card-icon-img" />
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To deliver intelligent Automatic Fare Collection systems through deep technical expertise, robust on-ground execution, and continuous innovation, helping transit agencies run secure, reliable, and scalable operations while improving everyday passenger journeys.
              </p>
            </div>

            <div className="value-card">
              <img src="/img/mission1.png" alt="Values" className="card-icon-img" />
              <h3 className="card-title">Our Values</h3>
              <p className="card-text">
                We believe excellence is achieved through teamwork and collaboration. Guided by ethics and integrity, our culture emphasizes agility, accountability, and disciplined execution to deliver meaningful outcomes for our partners and communities.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section id="our-team" className="company-section team-section">
          <h2 className="section-heading">Our Team</h2>
          <p className="team-intro">
            Meet the passionate professionals driving innovation and excellence at SAARTECH
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link">in</a>
                      <a href="#" className="social-link">@</a>
                    </div>
                  </div>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company History */}
        <section id="company-history" className="company-section history-section">
          <h2 className="section-heading" style={{ marginBottom: '10px' }}>Our Journey</h2>
          <div className="timeline-horizontal">
            <div className="timeline-wave-line">
              <svg width="100%" height="30" viewBox="0 0 1400 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#ffffff', stopOpacity:1}} />
                  </linearGradient>
                </defs>
                <path d="M0,15 Q100,5 200,15 T400,15 T600,15 T800,15 T1000,15 T1200,15 T1400,15" stroke="url(#waveGradient)" strokeWidth="6" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon icon-2021">
                  <img src="https://paycraftsol.com/wp-content/uploads/2019/10/icon2014.png" alt="2021" />
                </div>
                <div className="timeline-year">2021</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Foundation</h3>
                <p className="timeline-text">
                  System Design and Software application development for Hubli-Dharwad BRTS ETM AFC system for NEC.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon icon-2022">
                  <img src="https://paycraftsol.com/wp-content/uploads/2019/10/icon2015.png" alt="2022" />
                </div>
                <div className="timeline-year">2022</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">First Major Contract</h3>
                <p className="timeline-text">
                  Collaboration with overseas players for software development of critical medical health applications.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon icon-2023">
                  <img src="https://paycraftsol.com/wp-content/uploads/2019/10/icon2016.png" alt="2023" />
                </div>
                <div className="timeline-year">2023</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">National Expansion</h3>
                <p className="timeline-text">
                  Installation, Testing, and Commissioning of AFC, Telecommunication, Security & Surveillance Systems.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon icon-2024">
                  <img src="https://paycraftsol.com/wp-content/uploads/2019/10/icon2017.png" alt="2024" />
                </div>
                <div className="timeline-year">2024</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">International Presence</h3>
                <p className="timeline-text">
                  Selection and supply of reliable IT hardware for AFC, ITMS, toll management, and surveillance systems.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon icon-2025">
                  <img src="https://paycraftsol.com/wp-content/uploads/2019/10/icon2018.png" alt="2025" />
                </div>
                <div className="timeline-year">2025</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Growth & Innovation</h3>
                <p className="timeline-text">
                  Expanded AI-driven AFC solutions and smart transit integrations across multiple cities.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon icon-2026">
                  <img src="https://paycraftsol.com/wp-content/uploads/2019/10/icon2019.png" alt="2026" />
                </div>
                <div className="timeline-year">2026</div>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">Industry Leadership</h3>
                <p className="timeline-text">
                  Leader with 300+ employees, serving 50+ transit authorities and advancing sustainable urban mobility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Company;
