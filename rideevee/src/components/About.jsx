import React from 'react';
import './About.css';
import img1 from "../images/paid.png";
import img2 from "../images/Vector.png";
import img3 from "../images/people.png";
import img4 from "../images/Group 1686551840.png";


export default function About() {
  return (
    <div className="about">
      <div className="about-image"></div>
      <div className="about-content">
        <h1>Why <span>Yatri</span>?</h1>
        
        <div className="about-reason">
          <div className="about-icon"><img src={img2}></img></div>
          <div className="about-text">
            <h2>Fast response time</h2>
            <p>Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.</p>
          </div>
        </div>
        <div className="about-reason">
          <div className="about-icon"><img src={img3}></img></div>
          <div className="about-text">
            <h2>Vast fleet</h2>
            <p>We have all kinds of Car on Rent available like Sedan, Suv, Muv, Premium Sedan, Tampo Traveller etc as per ur requirement</p>
          </div>
        </div>
        <div className="about-reason">
          <div className="about-icon"><img src={img4}></img></div>
          <div className="about-text">
            <h2>Easy to order</h2>
            <p>Easily Book Cab Online with our website or call our customer support team.</p>
          </div>
        </div>
        <div className="about-reason">
          <div className="about-icon"><img src={img1}></img></div>
          <div className="about-text">
            <h2>Great tariffs</h2>
            <p>Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default About;
