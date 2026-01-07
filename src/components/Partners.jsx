import './Partners.css';

function Partners() {
  const partners = [
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
  
  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">
        <h2 className="partners-heading">Our Partners</h2>
        <div className="partners-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo-wrapper">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </div>
          ))}
        </div>
        <button className="view-more-btn">View More</button>
      </div>
    </section>
  );
}

export default Partners;
