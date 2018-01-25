import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CardContainer from '../card-container/CardContainer';
import Input from '../input/Input';
import {shallow} from 'enzyme'
import DistrictRepository from '../../helper.js';
import data from '../../data/kindergartners_in_full_day_program.js';

import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper;

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
    const district = new DistrictRepository(data)
    const inst = wrapper.instance()
    
    inst.handleSearch()
    expect(inst.state.data).toHaveLength(181)
  })

  it('should begin with nothing in state.compare', () => {
    const inst = wrapper.instance()

    expect(inst.state.compare).toEqual([])
  })

})



