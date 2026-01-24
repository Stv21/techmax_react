import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

// Navigation data structure with dropdown items
const navigationData = [
  {
    name: 'ABOUT US',
    path: '/company'
  },
  {
    name: 'OUR SERVICES',
    dropdown: [
      { name: ' Mobility - Automatic Fare Collection System', path: '/solutions?service=mobility' },
      { name: 'Enterprise IT Infrastructure', path: '/solutions?service=entrepreneurship' },
      { name: 'Advisory & Technical Consultancy', path: '/solutions?service=advisor' },
      { name: 'Professional Services (FMS)', path: '/solutions?service=proposal' }
    ]
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
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Check if this nav item is active
  const isActive = location.pathname === navItem.path || 
    (navItem.dropdown && location.pathname === '/solutions');
  
  // Get the service query parameter for dropdown highlighting
  const searchParams = new URLSearchParams(location.search);
  const currentService = searchParams.get('service');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // If it's a dropdown
  if (navItem.dropdown) {
    return (
      <li className="nav-item">
        <div 
          className="dropdown-container"
          {...(!isMobile && {
            onMouseLeave: () => setIsDropdownOpen(false)
          })}
        >
          <span 
            className="nav-link dropdown-toggle"
            onClick={() => {
              navigate('/solutions');
              if (onMobileClose) onMobileClose();
            }}
            {...(!isMobile && {
              onMouseEnter: () => setIsDropdownOpen(true)
            })}
          >
            {navItem.name}
            <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </span>
          {isDropdownOpen && (
            <ul className="dropdown">
              {navItem.dropdown.map((subItem, subIndex) => {
                const serviceParam = subItem.path.split('service=')[1];
                const isSubItemActive = currentService === serviceParam;
                return (
                <li key={subIndex}>
                  <a 
                    href="#"
                    className={isSubItemActive ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(subItem.path);
                      setIsDropdownOpen(false);
                      setIsClickOpened(false);
                      if (onMobileClose) onMobileClose();
                      if (onSubItemClick) onSubItemClick(subItem.name);
                    }}
                  >
                    {subItem.name}
                  </a>
                </li>
              )})}
            </ul>
          )}
        </div>
      </li>
    );
  }
  
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
      <li className="nav-item">
        <span 
          className={`nav-link ${isActive ? 'active' : ''}`}
          onClick={() => {
            navigate('/company');
            if (onMobileClose) onMobileClose();
          }}
        >
          {navItem.name}
        </span>
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
  
  return null;
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
