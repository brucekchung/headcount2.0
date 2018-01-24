import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({location, data}) => {
  return (
    <div className="card">
      <h2>{location}</h2>
      <ul>
      {
        Object.keys(data).map((year, index) => {
          let className;

          if(data[year] < 0.5){
            className = "under-fifty"
          }

          return <li className={className} key={index}>{year}: {data[year]}</li>
        })
      }
      </ul>
    </div>
  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default Card;