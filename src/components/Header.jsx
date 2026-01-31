import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

// Helper: determine if we should run desktop-only JS behaviors
const isDesktopPointer = () => {
  try {
    const finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    const notTouch = !('ontouchstart' in window) && !navigator.maxTouchPoints;
    return window.innerWidth > 768 && finePointer && notTouch;
  } catch (e) {
    return window.innerWidth > 768;
  }
};

// Helper: scroll with header offset
const scrollToWithHeaderOffset = (element, extra = 12) => {
  if (!element) return;
  try {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 70;
    const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - extra;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  } catch (e) {
    try { element.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (err) {}
  }
};

// Navigation data structure with dropdown items (ordered)
const navigationData = [
  {
    name: 'ABOUT US',
    path: '/company'
  },
  {
    name: 'OUR SERVICES',
    dropdown: [
      { name: 'Automatic Fare Collection System', path: '/solutions/mobility' },
      { name: 'Enterprise IT Infrastructure', path: '/solutions/enterprise' },
      { name: 'Advisory & Technical Consultancy', path: '/solutions/advisory' },
      { name: 'Professional Services (FMS)', path: '/solutions/professional' }
    ]
  },
  {
    name: 'PARTNERS',
    scrollTo: 'partners'
  },
  {
    name: 'CAREERS',
    path: '/careers'
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
              // Desktop: SPA navigate + smooth scroll. Mobile/touch: prefer full navigation so Safari handles hashes reliably.
              if (isDesktopPointer()) {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('solutions');
                    if (element) scrollToWithHeaderOffset(element);
                  }, 100);
                } else {
                  const element = document.getElementById('solutions');
                  if (element) scrollToWithHeaderOffset(element);
                }
              } else {
                // let the browser handle it (navigate to homepage with fragment)
                window.location.href = '/#solutions';
              }
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
                    href={subItem.path}
                    className={isSubItemActive ? 'active' : ''}
                    onClick={(e) => {
                      if (isDesktopPointer()) {
                        e.preventDefault();
                        navigate(subItem.path);
                        setIsDropdownOpen(false);
                        if (onMobileClose) onMobileClose();
                        if (onSubItemClick) onSubItemClick(subItem.name);
                      } else {
                        // mobile: allow native navigation (full page) for reliability on iOS Safari
                        // no preventDefault
                      }
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
          href={`/#${navItem.scrollTo}`}
          className="nav-link"
          onClick={(e) => {
            if (isDesktopPointer()) {
              e.preventDefault();
                if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const element = document.getElementById(navItem.scrollTo);
                  if (element) scrollToWithHeaderOffset(element);
                }, 100);
              } else {
                const element = document.getElementById(navItem.scrollTo);
                if (element) scrollToWithHeaderOffset(element);
              }
            } else {
              // mobile: allow browser to navigate to /#fragment for consistent native behavior
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
        <a 
          className={`nav-link ${isActive ? 'active' : ''}`} 
          href="/company"
          onClick={(e) => {
            if (isDesktopPointer()) {
              e.preventDefault();
              navigate('/company');
            } else {
              // mobile: allow native navigation
            }
            if (onMobileClose) onMobileClose();
          }}
        >
          {navItem.name}
        </a>
      </li>
    );
  }
  
  // If it's a simple route link (e.g., /solutions)
  if (navItem.path) {
    // For Careers, prefer a full navigation (refresh) so the page loads at the top
    if (navItem.path === '/careers') {
      return (
        <li className="nav-item">
          <a
            className="nav-link"
            href="/careers"
            onClick={() => {
              if (onMobileClose) onMobileClose();
            }}
          >
            {navItem.name}
          </a>
        </li>
      );
    }

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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Consider scrolled if past 100px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWithHeaderOffset = (element, extra = 12) => {
    if (!element) return;
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 70;
    const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - extra;
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${location.pathname === '/company' ? 'company-header' : ''}`}>
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
