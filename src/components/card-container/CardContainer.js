import React from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ data }) => {
  return (
    <div>
      {
        data.map((item, index) => <Card location={item.location}
                                   data={item.data}
                                   key={index} />)
      }
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardContainer;