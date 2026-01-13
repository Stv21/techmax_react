import { useEffect } from 'react';
import './Company.css';

function Company() {
  useEffect(() => {
    // Reset scroll immediately
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also reset after a short delay to override any other scroll behavior
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "John Anderson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
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
                SAARTECH is a technology-driven AFC solutions provider specializing in the design, development, and execution of Automatic Fare Collection systems for metro, BRT, and urban transit networks across the globe.
                Our core strength lies in combining deep technical expertise with proven on-ground execution capability, partnering with transit authorities to build reliable, secure, and future-ready fare collection ecosystems that serve millions of passengers daily.
              </p>
            </div>
            <div className="company-founder-section">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop" 
                alt="CEO" 
                className="company-founder-image" 
              />
              <h3 className="company-founder-name">Sachin Kumar</h3>
              <p className="company-founder-title">CEO</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission-vision" className="company-section mission-vision-section">
          <h2 className="section-heading">Vision & Mission</h2>
          <div className="mission-vision-grid">
            <div className="vision-card">
              <div className="card-icon">🚀</div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To be a trusted AFC technology partner enabling efficient, secure, and intelligent fare collection for modern public transport systems.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3 className="card-title">Our Mission</h3>
              <ul className="mission-list">
                <li>To design and deliver high-availability AFC systems aligned with global best practices</li>
                <li>To provide scalable and secure software platforms for revenue operations</li>
              </ul>
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
          <h2 className="section-heading">Our Journey</h2>
          <div className="timeline-horizontal">
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2015</div>
                <h3 className="timeline-title">Foundation</h3>
                <p className="timeline-text">
                  SAARTECH was founded with a vision to revolutionize the technology solutions industry. 
                  Started with a small team of 5 dedicated professionals in a single office.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2017</div>
                <h3 className="timeline-title">First Major Contract</h3>
                <p className="timeline-text">
                  Secured our first major metro transit project, establishing ourselves as a reliable AFC solutions provider. 
                  Expanded team to 25 members and opened a second regional office.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2019</div>
                <h3 className="timeline-title">National Expansion</h3>
                <p className="timeline-text">
                  Expanded operations nationwide with 5 regional offices. Won multiple awards for innovation 
                  and excellence in technology implementation. Team grew to 100+ professionals.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2022</div>
                <h3 className="timeline-title">International Presence</h3>
                <p className="timeline-text">
                  Launched international operations with projects in Southeast Asia and Middle East. 
                  Established strategic partnerships with global technology leaders and R&D center.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-year">2026</div>
                <h3 className="timeline-title">Innovation Leader</h3>
                <p className="timeline-text">
                  Now recognized as an industry leader with 300+ employees, serving 50+ major transit authorities 
                  and enterprises. Continuing to push boundaries with AI-driven solutions and smart city initiatives.
                </p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Company;
