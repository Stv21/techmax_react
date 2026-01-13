import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-top">
        <div className="footer-container">
          <a href="https://www.google.com/maps/search/?api=1&query=Plot+No.+4,+Kh.+-+569,+Khatu+Shyam+Homes,+Green+Enclave,+Chipiyana,+Gautam+Buddha+Nagar,+Uttar+Pradesh,+201009" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
            <div className="contact-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4169e1" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Find us</h3>
              <p>Plot No. 4, Kh. - 569, Khatu Shyam Homes, Green Enclave,Chipiyana, Gautam Buddha Nagar, <br /> Uttar Pradesh, 201009.</p>
            </div>
          </a>
          
          <a href="tel:+918595790105" className="footer-contact-item">
            <div className="contact-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4169e1" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Call us</h3>
              <p>+91 8595790105</p>
            </div>
          </a>
          
          <a href="mailto:info@saartechs.com" className="footer-contact-item">
            <div className="contact-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4169e1" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-info">
              <h3>Mail us</h3>
              <p>info@saartechs.com</p>
            </div>
          </a>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="img/logo.png" alt="Saartech" />
              <p className="footer-tagline">specialised technology services</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">Copyright © 2026, All Right Reserved <strong>saartech</strong></p>
          <div className="footer-bottom-links">
            <a href="#">Home</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Policy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
