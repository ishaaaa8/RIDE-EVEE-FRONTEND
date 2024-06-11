import React from 'react'
import Card from './Card';
import './Property.css';
function Property() {
    const data = [
        { heading: 'CAR TYPE', content: ['Sedan', 'SUV', 'Hatchback'] },
        { heading: 'MODEL', content: ['Etios, Amaze, Dzire etc.', 'Wagon R, Celerio, Micra etc.', 'Ertiga, Xylo etc. '] },
        { heading: 'PASSENGERS', content: ['4', '7', '5'] },
        { heading: 'IDEAL FOR', content: ['Comfortable trips with small families', 'Budget trips over short distances', 'Premium trips with large families'] },
        { heading: 'FAIR', content: ['$20/hr', '$30/hr', '$15/hr'] }
      ];

  return (
    <div className="properties">

        {data.map((item, index) => (
             <Card key={index} heading={item.heading} content={item.content} />
        ))}

    </div>
  )
}

export default Property
