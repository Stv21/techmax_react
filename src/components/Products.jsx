import './Products.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Solutions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showAll, setShowAll] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const solutions = [
    {
      title: 'Mobility - Automatic Fare Collection System',
      image: '/img/solutions/mobility_afc.jpeg',
      desc: 'Complete AFC lifecycle services from system architecture to operational support.'
    },
    {
      title: 'Enterprise IT Infrastructure',
      image: '/img/solutions/enterprise_it.jpeg',
      desc: 'Virtualization, data center modernization, and security integration solutions.'
    },
    {
      title: 'Advisory & Technical Consultancy',
      image: '/img/solutions/technical_consultancy.jpeg',
      desc: 'Expert guidance on technology strategy, architecture, and implementation.'
    },
    {
      title: 'Professional Services (FMS)',
      image: '/img/solutions/professional_services.jpeg',
      desc: 'End-to-end project management, implementation, and talent solutions.'
    }
  ];

  // Mobile shows 1 card, desktop shows 4 cards (all services fit in one view)
  const cardsPerView = isMobile ? 1 : 4;
  const maxSlide = solutions.length - cardsPerView;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const handleCardClick = (title) => {
    // Map titles to service parameters
    const serviceMap = {
      'Mobility - Automatic Fare Collection System': 'mobility',
      'Enterprise IT Infrastructure': 'entrepreneurship',
      'Advisory & Technical Consultancy': 'advisor',
      'Professional Services (FMS)': 'proposal'
    };
    const serviceParam = serviceMap[title];
    if (serviceParam) {
      navigate(`/solutions?service=${serviceParam}`);
    }
  };

  const navigate = useNavigate();
  
  // For mobile, show all 4 solutions (no need for showAll since we only have 4)
  const displayedSolutions = solutions;
  
  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        <h2 className="solutions-heading" style={{paddingBottom: '15px'}}>Our Services</h2>
        {isMobile ? (
          <div className="solutions-grid">
            {displayedSolutions.map((solution, index) => (
              <div key={index} className="solution-card" onClick={() => handleCardClick(solution.title)}>
                <div className="card-decorations"></div>
                <img src={solution.image} alt={solution.title} className="solution-image" />
                <div className="solution-overlay">
                  <h3 className="solution-title">{solution.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="carousel-wrapper">
            {maxSlide > 0 && (
              <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
                &#8249;
              </button>
            )}
            <div className="solutions-carousel">
              <div 
                className="solutions-track" 
                style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
              >
                {solutions.map((solution, index) => (
                  <div key={index} className="solution-card" onClick={() => handleCardClick(solution.title)}>
                    <div className="card-decorations"></div>
                    <img src={solution.image} alt={solution.title} className="solution-image" />
                    <div className="solution-overlay">
                      <h3 className="solution-title">{solution.title}</h3>
                      <p className="solution-desc">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {maxSlide > 0 && (
              <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
                &#8250;
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Solutions;
