import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

// Navigation data structure with dropdown items
const navigationData = [
  {
    name: 'ABOUT US',
    path: '/company',
    items: [
      { name: 'ABOUT US', anchor: 'about-us' },
      { name: 'MISSION & VISION', anchor: 'mission-vision' },
      { name: 'OUR TEAM', anchor: 'our-team' },
      { name: 'COMPANY HISTORY', anchor: 'company-history' }
    ]
  },
  {
    name: 'SOLUTIONS',
    path: '/solutions'
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
  const navigate = useNavigate();
  const location = useLocation();
  
  // If it's a scroll link
  if (navItem.scrollTo) {
    return (
      <li className="nav-item">
        <a 
          href={`#${navItem.scrollTo}`}
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== '/') {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById(navItem.scrollTo);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            } else {
              const element = document.getElementById(navItem.scrollTo);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }
            if (onMobileClose) onMobileClose();
          }}
        >
          {navItem.name}
        </a>
      </li>
    );
  }
  
  // If it's a Company link with dropdown
  if (navItem.path === '/company') {
    return (
      <li 
        className="nav-item"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span 
          className="nav-link" 
          onClick={() => {
            navigate('/company');
            if (onMobileClose) onMobileClose();
          }}
        >
          {navItem.name}
        </span>
        {isOpen && (
          <ul className="dropdown">
            {navItem.items.map((item, index) => (
              <li key={index}>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === '/company') {
                      // Already on company page, just scroll
                      const element = document.getElementById(item.anchor);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    } else {
                      // Navigate to company page then scroll
                      navigate('/company');
                      setTimeout(() => {
                        const element = document.getElementById(item.anchor);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 300);
                    }
                    if (onMobileClose) onMobileClose();
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
  
  // If it's a simple route link (e.g., /solutions)
  if (navItem.path) {
    return (
      <li className="nav-item">
        <span 
          className="nav-link" 
          onClick={() => {
            navigate(navItem.path);
            if (onMobileClose) onMobileClose();
          }}
        >
          {navItem.name}
        </span>
      </li>
    );
  }
  
  // If it's a regular dropdown (Solutions)
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
  const navigate = useNavigate();

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
      <div className="header-container" style={{ paddingRight: 0 }}>
        <div 
          className="logo"
          onClick={() => {
            closeMobileMenu();
            navigate('/');
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          }}
          style={{ cursor: 'pointer' }}
        >
          <img src="/img/logo1.png" alt="TechMax" />
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
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
