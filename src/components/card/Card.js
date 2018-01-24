import React from 'react';
import './Card.css'

const Card = ({location, data}) => {
  return (
    <div className="card">
      <h2>{location}</h2>
      <ul>
      {
        Object.keys(data).map(year => {
          let className;

          if(data[year] < 0.5){
            className = "under-fifty"
          }

          return <li className={className}>{year}: {data[year]}</li>
        })
      }
      </ul>
    </div>
  )
}

export default Card;