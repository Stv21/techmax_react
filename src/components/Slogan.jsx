import { useEffect, useRef, useState } from 'react';
import './Slogan.css';

function Slogan() {
  const taglineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (taglineRef.current) {
        const rect = taglineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if tagline is in viewport
        const inView = rect.top < windowHeight && rect.bottom > 0;
        
        if (inView && !isVisible) {
          setIsVisible(true);
        } else if (!inView && isVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline>
        <source src={isMobile ? "/video/metro_mobile.mp4" : "/video/entry1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
        <h4 className="hero-text">Powering Urban Transit with Smart Fare Technology</h4>
        <div 
          ref={taglineRef}
          className={`tagline ${isVisible ? 'animate' : ''}`}
        >
          <p className="tagline-subtext">Infrastructure to Intelligence</p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;

