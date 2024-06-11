import React from 'react'
import './ReadMore.css'
function ReadMore() {
    return (
      <div className="read-more">
        
        <div className="read-more-left">
          <h2>Why choose AC Bus or AC Train for your <span>One-way Journey?</span></h2>
          <p>Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.
          </p>
          <span>Read More...</span>
        </div>
        <div className="read-more-left">
          {/* <img src={image} alt="GIF" className="read-more-image" /> */}
          img
        </div>
      </div>
    );
  }

export default ReadMore
