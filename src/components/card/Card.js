import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ location, data, id, handleCompare }) => {
  const renderedData = () => {
    return Object.keys(data).map((year, index) => {
      let percentage = data[year];
      let name = percentage < 0.5 ? "under-fifty" : "over-fifty";

      return ( 
        <li className={ name } key={ index }>
           { year }: { percentage }
        </li> 
      )
    })
  }

  return (
    <div className="card"
         onClick={ handleCompare }
         id={ id }>
      <h2>{ location }</h2>
      <ul>
      { renderedData() }
      </ul>
    </div>
  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired

}

export default Card;