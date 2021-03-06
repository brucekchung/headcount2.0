/* eslint-disable */
import React from 'react'
import App from './App'
import {shallow} from 'enzyme'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have a wrapper div', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should load data into state', () => {
    const inst = wrapper.instance()
    
    inst.handleSearch()
    expect(inst.state.data).toHaveLength(181)
  })

  it('should begin with nothing in state.compare', () => {
    const inst = wrapper.instance()

    expect(inst.state.compare).toEqual([])
  })

  it('should be able to compare two districts', () => {
    const inst = wrapper.instance()
    const obj1 = {
      "location": "Colorado",
      "Data": 0.74118
    }
    const obj2 = {
      "location": "ACADEMY 20",
      "Data": 0.39159
    }

    inst.setState({compare: [obj1, obj2]})
    const actual = inst.calculateAverage(obj1, obj2)
    const expected = { COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.3 }

    expect(actual).toEqual(expected)
  })

})



