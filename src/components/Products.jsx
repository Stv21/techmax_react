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
      title: 'Automatic Fare Collection System',
      image: '/img/solutions/mobility_afc.jpeg',
      desc: 'We power next-generation fare collection systems, streamlining ticketing, validation, and business logic to help operators deliver seamless, high-performance experiences at scale.'
    },
    {
      title: 'Enterprise IT Infrastructure Systems',
      image: '/img/solutions/enterprise_it.jpeg',
      desc: 'We deliver modern IT infrastructure that forms the foundation for digital transformation. From core data centers to edge environments, our solutions ensure the agility, performance, and resilience required to support innovation and business growth.'
    },
    {
      title: 'Advisory & Technical Consultancy Systems',
      image: '/img/solutions/technical_consultancy.jpeg',
      desc: 'Our Advisory & Consultancy Services enable organizations to make informed technology decisions, optimize IT infrastructure, and achieve business goals.'
    },
    {
      title: 'Professional Services (FMS) Systems',
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
    // Map titles to new service routes
    const serviceMap = {
      'Mobility - Automatic Fare Collection System': '/solutions/mobility',
      'Enterprise IT Infrastructure Systems': '/solutions/enterprise',
      'Advisory & Technical Consultancy': '/solutions/advisory',
      'Professional Services (FMS) Systems': '/solutions/professional'
    };
    const route = serviceMap[title];
    if (route) {
      navigate(route);
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
                  <div key={index} className="solution-card">
                    <div className="card-decorations"></div>
                    <img src={solution.image} alt={solution.title} className="solution-image" />
                    <div className="solution-overlay">
                      <h3 className="solution-title">{solution.title}</h3>
                      <button className="solution-learn-more-btn" onClick={() => handleCardClick(solution.title)}>
                        Know More
                      </button>
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
