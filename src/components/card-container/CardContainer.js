import React, { Component } from 'react';
import Card from '../card/Card';

const CardContainer = ({ data }) => {
  //console.log(data)
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