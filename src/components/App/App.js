import React, { Component } from 'react'
import './App.css'
import CardContainer from '../card-container/CardContainer'
import Input from '../input/Input'
import CompareSection from '../CompareSection/CompareSection' 
import data from '../../data/kindergartners_in_full_day_program.js'
import DistrictRepository from '../../helper.js'
import PropTypes from 'prop-types'
import './App.css'

const district = new DistrictRepository(data)

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: district.findAllMatches(),
      compare: []
    }
  }

  handleSearch = input => {
    const allMatches = district.findAllMatches(input)
    this.setState({ data: allMatches })
  }

  handleCompare = (e) => {
    const location = e.target.closest('div').firstChild.innerText
    const match = this.state.data.find( obj => obj.location === location )
    const cardToRemove = this.state.compare.find( obj => obj.location === location )

    if (this.state.compare.length < 2) {
      this.setState({ compare: [...this.state.compare, match] })
    }

    if (cardToRemove) {
      const remaining = this.state.compare.filter( obj => obj.location !== location )
      this.setState({ compare: remaining })
    }
  } 

  calculateAverage = (a, b) => {
    return district.compareDistrictAverages(a.location, b.location)
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Headcount 2.0</h1>
        <Input handleSearch={ this.handleSearch } />
        <section className="compare-top">
          {
            this.state.compare.length > 0 &&
            <CompareSection data={ this.state.compare }
                            calculateAverage={ this.calculateAverage }/>
          }
        </section>
        <CardContainer data={ this.state.data }
                       handleCompare={ this.handleCompare }
                       selectedCards={ this.state.compare } />
      </div>
    )
  }
}

App.propTypes = {
    state: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  })
}

export default App;
