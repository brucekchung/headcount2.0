import React from 'react';
import Card from '../card/Card';
import { arrayOf, func, object } from 'prop-types';

const CompareSection = ({ data, calculateAverage }) => {
  const [a, b] = data;

  const renderSingle = (obj) => {
    return <Card {...obj} className="card selected" />
  }

  const renderMultiple = (a, b) => {
    if (data.length === 2) {
      let averages = calculateAverage(a, b);

      return (
        <div>
          { renderSingle(a) }
          { compareCard(a, b, averages) }
          { renderSingle(b) }
        </div>
      )
    } 
  }

  const compareCard = (a, b, averages) => {
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
      { renderMultiple(a, b) || renderSingle(a) }
    </div>
  )
}

CompareSection.propTypes = {
  data: arrayOf(object).isRequired,
  calculateAverage: func.isRequired
}

export default CompareSection