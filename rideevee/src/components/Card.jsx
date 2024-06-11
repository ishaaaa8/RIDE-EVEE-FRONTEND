import React from 'react'
import './Card.css'

function Card({ heading, content }) {
    const contentArray = Array.isArray(content) ? content : [content];
    return (
      <div className="card">
        <div className="card-heading">{heading}</div>
        <div className="card-content">
          {contentArray.map((item, index) => (
            <p key={index} className='item'>{item}</p>
          ))}
        </div>
      </div>
    );
  }

export default Card
