import { useState } from 'react';
import './Partners.css';

function Partners() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useState(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const mainPartners = [
    {
      name: "HP",
      logo: "/img/logo_hp.png"
    },
    {
      name: "Texmaco",
      logo: "/img/logo_texmaco.png"
    },
    {
      name: "Atek",
      logo: "/img/logo_atek.png"
    },
    {
      name: "SentinelOne",
      logo: "https://cdn.brandfetch.io/idqbZJLrXa/theme/dark/id98b5uTfq.svg?c=1bxid64Mup7aczewSAYMX&t=1699470647032"
    }
  ];

  const additionalPartners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
    },
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg"
    },
    {
      name: "VMware",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg"
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    }
  ];

  const mobilePartners = mainPartners.slice(0, 2);
  const displayedPartners = showAll 
    ? [...mainPartners, ...additionalPartners] 
    : (isMobile ? mobilePartners : mainPartners);
  
  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <h2 className="partners-heading">Our Partners</h2>
        <div className="partners-logos">
          {displayedPartners.map((partner, index) => (
            <div key={index} className="partner-logo-wrapper">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </div>
          ))}
        </div>
        <button 
          className="view-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </section>
  );
}

export default Partners;
