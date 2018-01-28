import React from 'react'
import './Card.css'
import { string, object, func } from 'prop-types'

const Card = ({ className, location, data, handleCompare }) => {
  const renderedData = () => {
    return Object.keys(data).map((year, index) => {
      const percentage = data[year]
      const name = percentage < 0.5 ? "under-fifty" : "over-fifty"

      return ( 
        <li className={ name } key={ index }>
          { year } 
          <span className="percentage">
            { percentage }
          </span>
        </li> 
      )
    })
  }

  return (
    <div 
      className={ className }
      onClick={ handleCompare } >
      <h2>{ location }</h2>
      <ul>
        { renderedData() }
      </ul>
    </div>
  )
}

Card.propTypes = {
  className: string.isRequired,
  location: string.isRequired,
  data: object.isRequired,
  handleCompare: func
}

export default Card