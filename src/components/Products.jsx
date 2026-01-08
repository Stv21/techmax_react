import './Products.css';
import { useState, useEffect } from 'react';

function Solutions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const solutions = [
    {
      title: "Cyber Security",
      image: "https://www.shutterstock.com/image-illustration/cyber-security-shield-symbol-blue-260nw-1449926897.jpg"
    },
    {
      title: "Infrastructure Modernization",
      image: "https://blog.shi.com/wp-content/uploads/2023/05/datacenterwarrantysolutionbrief_hub-img_v1_ag_03nov25.png"
    },
    {
      title: "Software Solutions",
      image: "https://s3.amazonaws.com/a-us.storyblok.com/f/1022730/2a96f6714c/grafana-dashboards-alerts-analysis.png"
    },
    {
      title: "Intelligent Devices",
      image: "https://techvidvan.com/tutorials/wp-content/uploads/2021/10/iot-devices.webp"
    },
    {
      title: "Mobility",
      image: "https://geospatialworld.net/wp-content/uploads/2017/03/Smart-Mobility-2.jpg"
    },
    {
      title: "Services",
      image: "https://www.cloudavize.com/wp-content/uploads/2023/10/IT-Consulting.jpeg"
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
  
  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        <h2 className="solutions-heading">Our Solutions</h2>
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
                <div key={index} className="solution-card">
                  <div className="card-decorations"></div>
                  <img src={solution.image} alt={solution.title} className="solution-image" />
                  <div className="solution-overlay">
                    <h3 className="solution-title">{solution.title}</h3>
                    <button className="read-more-btn">Read more</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
