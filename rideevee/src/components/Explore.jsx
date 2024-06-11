import React, { useState } from 'react';
import './Explore.css';

function Explore() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    console.log('Selected button index:', index);
  };

  return (
    <div className="explore">
      <div className="explore-background"></div>
      <div className="explore-content">
        <div className="button-group">
          {['Outstation', 'Local', 'Airport', 'One Way', 'Round Trip'].map((option, index) => (
            <button
            key={index}
            className={`explore-button ${selectedButton === index ? 'selected' : ''}`}
            onClick={(e) => {
              console.log('Button clicked:', e.target);
              handleButtonClick(index);
            }}
          >
              {option}
            </button>
          ))}
        </div>
        
        <div className="form-group">
          <div className="form-row">
            <div className="form-field">
              <label>From</label>
              <input type="text" placeholder="Enter starting point" />
            </div>
            <div className="form-field">
              <label>To</label>
              <input type="text" placeholder="Enter destination" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label>Pick Up Date</label>
              <input type="date" />
            </div>
            <div className="form-field">
              <label>Pick Up At</label>
              <input type="time" />
            </div>
          </div>
        </div>
        <button className="explore-cabs-button">Explore Cabs</button>
      </div>
    </div>
  );
}

export default Explore;
