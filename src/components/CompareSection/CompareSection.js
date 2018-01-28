import React from 'react'
import Card from '../card/Card'
import { arrayOf, func, object } from 'prop-types'
import './CompareSection.css'

const CompareSection = ({ data, calculateAverage }) => {
  const [first, second] = data

  const renderSingle = (data) => {
    return <Card {...data} className="card selected" />
  }

  const compareCard = (first, second, averages) => {
    return (
      <div className="card center">
        <h3>{ second.location }: { averages[first.location] } </h3>
        <h2>{ averages.compared }</h2>
        <h3>{ second.location }: { averages[second.location] }</h3>
      </div>
    )
  }

  const renderMultiple = (first, second) => {
    if (data.length === 2) {
      let averages = calculateAverage(first, second)

      return (
        <div className="render-multiple">
          { renderSingle(first) }
          { compareCard(first, second, averages) }
          { renderSingle(second) }
        </div>
      )
    } 
  }

  return (
    <div className="comparison">
      { renderMultiple(first, second) || renderSingle(first) }
    </div>
  )
}

CompareSection.propTypes = {
  data: arrayOf(object).isRequired,
  calculateAverage: func.isRequired
}

export default CompareSection