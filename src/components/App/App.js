import React, { Component } from 'react';
import './App.css';
import CardContainer from '../card-container/CardContainer';
import Input from '../input/Input';
import CompareSection from '../CompareSection/CompareSection' 
import data from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';
import PropTypes from 'prop-types';

const district = new DistrictRepository(data);

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: district.findAllMatches(),
      compare: []
    }
  }

  handleSearch = input => {
    const allMatches = district.findAllMatches(input);
    this.setState({ data: allMatches });
  }

  handleCompare = (e) => {
    const location = e.target.closest('div').firstChild.innerText;
    const match = this.state.data.find( dataPoint => dataPoint.location === location);
    
    if(this.state.compare.length < 2){
      this.setState({ compare: [...this.state.compare, match] });
    }
  } 

  calculateAverage = (a, b) => {
    return district.compareDistrictAverages(a.location, b.location) ;
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Headcount 2.0</h1>
        <Input handleSearch={ this.handleSearch } />
        {
          this.state.compare.length > 0 &&
          <CompareSection data={ this.state.compare }
                          calculateAverage={ this.calculateAverage }/>
        }
        <CardContainer data={ this.state.data }
                       handleCompare={ this.handleCompare } />
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  })
}

export default App;
