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
  const compare = [  {
    "location": "ColoraDo",
    "TimeFrame": 2014,
    "DataFormat": "Percent",
    "Data": 0.74118
  },
  {
    "location": "ACADEMY 20",
    "TimeFrame": 2007,
    "DataFormat": "Percent",
    "Data": 0.39159
  }]

  beforeEach(() => {
    wrapper = shallow(<CompareSection data={compare} calculateAverage={calculateAverage} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
