import React from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ data, handleCompare, selectedCards }) => {
  const className = location => {
    const match = selectedCards.find( card => card.location === location)
    
    return match ? "card selected" : "card"
  }

  const renderedCards = () => {
    return data.map((item, index) => <Card { ...item }
                                           className={ className(item.location) }
                                           key={ item.id + index }
                                           handleCompare={ handleCompare } /> )
  }

  return (
    <div >
      { renderedCards() }
    </div>
  ) 
}

CardContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardContainer;