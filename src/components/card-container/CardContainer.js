import React, { Component } from 'react';
import Card from '../card/Card';

const CardContainer = ({ data }) => {
  console.log(data)
  return (
    <div>
      <p>This is the container</p>
      <Card />
    </div>
  )
}

export default CardContainer;