import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

const isDesktopPointer = () => {
  try {
    const finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    const notTouch = !('ontouchstart' in window) && !navigator.maxTouchPoints;
    return window.innerWidth > 768 && finePointer && notTouch;
  } catch (e) {
    return window.innerWidth > 768;
  }
};

const scrollToWithHeaderOffset = (element, extra = 12) => {
  if (!element) return;
  const header = document.querySelector('.header');
  const headerHeight = header ? header.offsetHeight : 70;
  const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - extra;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
};

function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path, scrollTo = null) => {
    if (isDesktopPointer()) {
      if (scrollTo) {
        if (window.location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            const element = document.getElementById(scrollTo);
            if (element) scrollToWithHeaderOffset(element);
          }, 100);
        } else {
          const element = document.getElementById(scrollTo);
          if (element) scrollToWithHeaderOffset(element);
        }
      } else {
        navigate(path);
      }
    } else {
      // Mobile/touch: prefer native full-page navigation to ensure Safari handles fragments reliably
      if (scrollTo) {
        window.location.href = `/#${scrollTo}`;
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <img src="img/logo.png" alt="Saartech" />
              <p className="footer-tagline">specialised technology services</p>
            </div>
            <p className="footer-description">
              Leading provider of intelligent Automatic Fare Collection systems and enterprise IT solutions, 
              delivering innovative technology services for modern transit and business infrastructure.
            </p>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://linkedin.com/company/saartech" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:info@saartechs.com" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/company" onClick={(e) => { if (isDesktopPointer()) { e.preventDefault(); handleNavClick('/company'); } }}>About Us</a></li>
              <li><a href="/#partners" onClick={(e) => { if (isDesktopPointer()) { e.preventDefault(); handleNavClick('/', 'partners'); } }}>Our Partners</a></li>
              <li><a href="/#contact" onClick={(e) => { if (isDesktopPointer()) { e.preventDefault(); handleNavClick('/', 'contact'); } }}>Contact Us</a></li>
              <li><Link to="/company">Company Profile</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><Link to="/solutions/mobility">Automatic Fare Collection</Link></li>
              <li><Link to="/solutions/enterprise">Enterprise IT Infrastructure</Link></li>
              <li><Link to="/solutions/advisory">Advisory & Consultancy</Link></li>
              <li><Link to="/solutions/professional">Professional Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3>Contact Info</h3>
            <div className="footer-contact-info">
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4169e1" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p>Plot No. 4, Kh. - 569, Khatu Shyam Homes,<br />Green Enclave, Chipiyana,<br />Gautam Buddha Nagar, UP 201009</p>
                </div>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4169e1" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p><a href="tel:+918595790105">+91 8595790105</a></p>
                </div>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4169e1" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <p><a href="mailto:info@saartechs.com">info@saartechs.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">© 2026 Saartech Solutions. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="/company" onClick={(e) => { if (isDesktopPointer()) { e.preventDefault(); handleNavClick('/company'); } }}>Privacy Policy</a>
            <a href="/company" onClick={(e) => { if (isDesktopPointer()) { e.preventDefault(); handleNavClick('/company'); } }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
