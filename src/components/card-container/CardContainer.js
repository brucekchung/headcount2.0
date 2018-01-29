import React from 'react'
import Card from '../card/Card'
import { arrayOf, object, func } from 'prop-types'
import './CardContainer.css'

const CardContainer = ({ data, handleCompare, selectedCards }) => {
  const className = location => {
    const match = selectedCards.find( card => card.location === location)
    
    return match ? "card selected" : "card"
  }

  const renderedCards = () => {
    return data.map((item, index) => 
      <Card { ...item }
        className={ className(item.location) }
        key={ item.id + index }
        handleCompare={ handleCompare } 
      /> 
    )
  }

  return (
    <div className="card-container">
      { renderedCards() }
    </div>
  ) 
}

CardContainer.propTypes = {
  data: arrayOf(object).isRequired,
  handleCompare: func.isRequired,
  selectedCards: arrayOf(object).isRequired
}

export default CardContainer