import React from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';

const CompareSection = ({ data, calculateAverage }) => {
  const [a, b] = data;
  let averages;

  if (data.length === 2) {
    averages = calculateAverage(a, b);
  }

  const compareCard = () => {
    return(
      <div className="card">
        <h3>{ a.location }: { averages[a.location] } </h3>
        <h2>{ averages.compared }</h2>
        <h3>{ b.location }: { averages[b.location] }</h3>
      </div>
    )
  }

  
  return (
    <div>
      {
        data.length === 1 &&
        <Card { ...a } className="card selected" />
      }
      {
        data.length === 2 &&
        <div>
          <Card { ...a } className="card selected" />
          { 
            compareCard() 
          }
          <Card { ...b } className="card selected" />
        </div>
      }
    </div>
  )
}

export default CompareSection