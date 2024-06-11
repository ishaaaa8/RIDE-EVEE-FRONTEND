import React from 'react'
import newsletterIcon from '../images/Rectangle 34624364.png'
import logo from '../images/Group 195.png'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <div className='fpage'>

      <div className="footer-inner">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-links">

          <div className="link">Home</div>
          <div className="link">About</div>
          <div className="link">Services</div>
          <div className="link">News</div>
          <div className="link">Contact</div>
          <div className="link">Privacy Policy</div>
        </div>
        <div className="newsletter-section">
          <div className="newsletter-label">Newsletter</div>
          <div className="newsletter-input-group">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <div className="newsletter-icon">
              <img src={newsletterIcon} alt="Subscribe" />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          All Copyrights are reserved by RIDE EVEE
        </div>
      </div>

      </div>
      
    </div>
  );
}

export default Footer
