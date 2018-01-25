import React from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ data, handleCompare }) => {
  const renderedCards = () => {
    return data.map((item, index) => <Card { ...item }
                                           key={ item.id + index }
                                           id={ item.id }
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