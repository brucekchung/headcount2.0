import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    const value = e.target.value;

    this.setState({value: value});
    this.props.handleSearch(value);
  }

  render() {
    return (
      <input type="text" 
             value={this.state.value} 
             placeholder="Search districts" 
             onChange={this.handleChange} />
    )
  }
}

export default Input;