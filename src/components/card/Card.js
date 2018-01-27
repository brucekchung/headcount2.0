import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ className, location, data, handleCompare }) => {
  const renderedData = () => {
    return Object.keys(data).map((year, index) => {
      const percentage = data[year];
      const name = percentage < 0.5 ? "under-fifty" : "over-fifty"

      return ( 
        <li className={ name } key={ index }>
           { year }: { percentage }
        </li> 
      )
    })
  }
 
  return (
    <div className={ className }
         onClick={ handleCompare }>
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

export default Card