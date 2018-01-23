import React, { Component } from 'react';
import './App.css';
import CardContainer from '../card-container/CardContainer';
import data from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../../helper.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: this.importData()
    }
  }

  importData() {
    const district = new DistrictRepository(data);
    return district.data;
  }

  render() {
    {this.importData()}
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <CardContainer />
      </div>
    );
  }
}

export default App;
