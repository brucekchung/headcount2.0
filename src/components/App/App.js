import React, { Component } from 'react';
import './App.css';
import CardContainer from '../card-container/CardContainer';
import data from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js';
import Input from '../input/Input';

const district = new DistrictRepository(data);

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: this.importData()
    }
  }

  importData() {
    return district.findAllMatches();
  }

  handleSearch = input => {
    const allMatches = district.findAllMatches(input);
    this.setState({ data: allMatches });
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Input handleSearch={this.handleSearch} />
        <CardContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
