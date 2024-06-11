import React from 'react'
import './Download.css'
import image1 from '../images/image 6.png'
import image2 from '../images/image 7.png'
function Download() {
  return (
    <div className="download">
      <div className="download-top">
        <div className="download-heading">
          <p>No over-pricing</p>
        </div>
        <div className="download-subheading">
          <p>Cheapest costs | Competitive prices</p>
        </div>
      </div>
      <div className="download-separator"></div>

      <div className="download-middle">
        <div className="download-content">
          <div className="download-heading">
            <p>Download Now</p>
          </div>
          <div className="download-icons">
            
            <img src={image1} alt="Download Icon" />
            
            <img src={image2} alt="Download Icon" />
          </div>
        </div>
      </div>

      <div className="download-separator"></div>
      <div className="download-bottom">
        <div className="download-heading">
          <p>No over-pricing</p>
        </div>
        <div className="download-subheading">
          <p>Cheapest costs | Competitive prices</p>
        </div>
      </div>
    </div>
  );
}

export default Download
