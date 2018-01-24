import React, { Component } from 'react';
import './App.css';
import CardContainer from '../card-container/CardContainer';
import Input from '../input/Input';
import data from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';
import PropTypes from 'prop-types';

const district = new DistrictRepository(data);

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: district.findAllMatches()
    }
  }

  handleSearch = input => {
    const allMatches = district.findAllMatches(input);
    this.setState({ data: allMatches });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Headcount 2.0</h1>
        <Input handleSearch={this.handleSearch} />
        <CardContainer data={this.state.data} />
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
