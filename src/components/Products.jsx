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
      title: 'System Design',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      desc: 'Protecting infrastructure, endpoints, data, and identities with modern controls, SOC, and zero-trust design.'
    },
    {
      title: 'Software Development',
      image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&h=600&fit=crop',
      desc: 'Hybrid cloud, data center, and network upgrades for scalable, reliable foundations.'
    },
    {
      title: 'Product Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      desc: 'Platforms and custom apps to streamline operations and decision-making with analytics.'
    },
    {
      title: 'System Implementation and Execution',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      desc: 'IoT devices and edge systems for real-time telemetry and automation.'
    },
    {
      title: 'Technical Consultancy',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      desc: 'Secure, managed access across devices and locations for a productive workforce.'
    },
    {
      title: 'Professional Services',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      desc: 'Consulting, implementation, and managed services to deliver outcomes end-to-end.'
    }
  ];

  // Mobile shows 1 card, desktop shows 3 cards
  const cardsPerView = isMobile ? 1 : 3;
  const maxSlide = solutions.length - cardsPerView;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const handleCardClick = (title) => {
    const q = encodeURIComponent(title);
    navigate(`/solutions?open=${q}`);
  };

  const navigate = useNavigate();
  
  // For mobile, show only 4 solutions initially
  const displayedSolutions = isMobile && !showAll ? solutions.slice(0, 4) : solutions;
  
  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        <h2 className="solutions-heading" style={{paddingBottom: '15px'}}>Our Services</h2>
        {isMobile ? (
          <>
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
            {!showAll ? (
              <button className="solutions-read-more-btn" onClick={() => setShowAll(true)}>
                View More
              </button>
            ) : (
              <button className="solutions-read-more-btn" onClick={() => setShowAll(false)}>
                View Less
              </button>
            )}
          </>
        ) : (
          <div className="carousel-wrapper">
            <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
              &#8249;
            </button>
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
            <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
              &#8250;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Solutions;
