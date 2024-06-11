import React from 'react'
import './Info.css'
// import image2 from '../images/d43c11d76c7db33af616426597e88833 2.png'
function Info() {
    return (
        <div className="info">
          <div className="info-heading">
            Why Choose One way Cab?
          </div>
          <div className="info-content">
            <div className="info-box">
                <ul>
                    <li>Instant Booking & Confirmation</li>
                    <li>Confirmed Booking Immediately</li>
                    <li>No Return Fare for One-Way Trip</li>
                    <li>Clean & Professional Cab Services</li>
                    <li>Transparent Billing with GPS based billing system</li>
             </ul>
            </div>
            <div className="info-image">
              {/* <img src={image2} alt="Description" /> */}
            </div>
            <div className="info-box">
            <ul>
            <li>Pick-up from your house</li>
                <li>Dedicated Cab just for you</li>
                <li>Drop to your desired destination</li>
                <li>Completed more than 20,000+ One-Way Trips</li>
                <li>Multiple Payment Option including Credit Card</li>
          </ul>
            </div>
          </div>
          <div className="info-description">
            Discover affordable travel with our seamless intercity car rentals in India – where excellence meets affordability with standardized rates in every city. Unleash your journey!
          </div>
        </div>
      );
}

export default Info
