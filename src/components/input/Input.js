import React, { Component } from 'react';
import { func, shape, string } from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    const value = e.target.value

    this.setState({ value });
    this.props.handleSearch(value);
  }

  render() {
    return (
      <div className="controls">
        <input type="text" 
             value={ this.state.value } 
             placeholder="Search districts" 
             onChange={ this.handleChange } />
        <button onClick={ this.props.clearSelection }>Clear</button>
      </div>
    )
  }
}

Input.propTypes = {
  handleSearch: func.isRequired,
  state: shape({
    value: string.isRequired
  })
}

export default Input