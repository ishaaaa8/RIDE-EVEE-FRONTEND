import React from 'react'
import './pages.css'
function Pages({heading , points}) {
    return (
        <div className="pages">
          <div className="heading-div">
            <h1>{heading}</h1>
          </div>
          <div className="content-div">
            <ul>
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default Pages
