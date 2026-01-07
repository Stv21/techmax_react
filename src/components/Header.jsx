import { useState, useEffect } from 'react';
import './Header.css';

// Navigation data structure with dropdown items
const navigationData = [
  {
    name: 'COMPANY',
    items: ['ABOUT US', 'MISSION & VISION', 'OUR TEAM', 'COMPANY HISTORY']
  },
  {
    name: 'SOLUTIONS',
    items: ['PAYMENT SOLUTIONS', 'TECHNOLOGY PLATFORM', 'MOBILE APPS', 'API SERVICES']
  },
  {
    name: 'PARTNERS',
    scrollTo: 'partners'
  },
  {
    name: 'CONTACT US',
    scrollTo: 'contact'
  }
];

// Navigation item component with dropdown or scroll link
const NavItem = ({ navItem, onSubItemClick, onMobileClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // If it's a scroll link
  if (navItem.scrollTo) {
    return (
      <li className="nav-item">
        <a 
          href={`#${navItem.scrollTo}`}
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(navItem.scrollTo);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
            if (onMobileClose) onMobileClose();
          }}
        >
          {navItem.name}
        </a>
      </li>
    );
  }
  
  // If it's a dropdown
  return (
    <li 
      className="nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="nav-link" onClick={() => setIsOpen(!isOpen)}>{navItem.name}</span>
      {isOpen && (
        <ul className="dropdown">
          {navItem.items.map((item, index) => (
            <li key={index}>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSubItemClick(item);
                  if (onMobileClose) onMobileClose();
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

function Header({ onSubItemClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Consider scrolled if past 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div 
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <img src="/img/logo1.png" alt="TechMax" />
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-menu">
            {navigationData.map((navItem, index) => (
              <NavItem 
                key={index} 
                navItem={navItem}
                onSubItemClick={onSubItemClick}
                onMobileClose={closeMobileMenu}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
