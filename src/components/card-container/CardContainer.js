import React from 'react';
import Card from '../card/Card';

const CardContainer = ({ data }) => {
  return (
    <div>
      {
        data.map(item => <Card location={item.location}
                                   data={item.data} />)
      }
    </div>
  )
}

export default CardContainer;