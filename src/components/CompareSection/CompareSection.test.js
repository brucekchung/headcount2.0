import React from 'react'
import CompareSection from './CompareSection'
import {shallow} from 'enzyme'
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('CompareSection', () => {
  let wrapper
  const district = new DistrictRepository(kinderData)
  const calculateAverage = (a, b) => district.compareDistrictAverages(a.location, b.location)
  const compare = [{
    "location": "ColoraDo",
    "data": {2004: 0.756, 2005: 0.658, 2006: 0.253},
    "id": 1
  },
  {
    "location": "ACADEMY 20",
    "data": {2004: 0.465, 2005: 0.758, 2006: 0.856},
    "id": 2
  }]

  beforeEach(() => {
    wrapper = shallow(<CompareSection data={compare}
                                      calculateAverage={calculateAverage} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render two district cards and a comparison card', () => {
    expect(wrapper.find('Card').length).toEqual(2)
    expect(wrapper.find('.center').length).toEqual(1)
  })

  it('should display the average of both districts', () => {
    expect(wrapper.find('h2').text()).toEqual('1.3');
  })

  it('should render a single card if there is only one selected', () => {
    const selected=[{
      "location": "ColoraDo",
      "data": {2004: 0.756, 2005: 0.658, 2006: 0.253},
      "id": 1
    }]
    wrapper = shallow(<CompareSection data={selected}
                                      calculateAverage={calculateAverage} />)

    expect(wrapper.find('Card').length).toEqual(1)
  })

})
