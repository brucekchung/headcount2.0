import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  state: PropTypes.shape({
    value: PropTypes.string.isRequired
  })
}

export default Input;