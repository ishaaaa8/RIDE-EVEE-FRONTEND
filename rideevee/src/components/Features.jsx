import React from 'react'
import './Features.css';
import icon1 from '../images/driving.png'
import icon2 from '../images/Group 1000001863.png'
import icon3 from '../images/Group 1686551829.png'


function Features() {
  // Data for the features
  const data = [
    { icon: icon2, heading: 'Return Fare, Not Fair!', content: 'Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your one-way travel.' },
    { icon: icon3, heading: 'GPS Based Billing System ', content: 'Since the GPS data captures the actual distance and time traveled,   it reduce the chance of Kilometer tampering or discrepancies in billing.' },
    { icon: icon1, heading: 'Now available routes are!', content: 'Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly' }
  ];

  return (
    <div className="features">
      {data.map((item, index) => (
        <div className="feature-box" key={index}>
          <img src={item.icon} alt={`Icon for ${item.heading}`} className="feature-icon" />
          <div className="feature-text">
            <h3>{item.heading}</h3>
            <p className='content'>{item.content}</p>
          </div>
          {index < data.length - 1 && <div className="vertical-line"></div>}
        </div>
      ))}
    </div>
  );
}

export default Features;

