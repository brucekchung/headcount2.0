import React from 'react'
import CardContainer from './CardContainer'
import {shallow} from 'enzyme'
import DistrictRepository from '../../helper.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js'

import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('CardContainer', () => {
  let wrapper
  const district = new DistrictRepository(kinderData)
  const data = district.findAllMatches()
  const selected = [{
    "Location": "Colorado",
    "TimeFrame": 2014,
    "DataFormat": "Percent",
    "Data": 0.74118
  },
  {
    "Location": "ACADEMY 20",
    "TimeFrame": 2007,
    "DataFormat": "Percent",
    "Data": 0.39159
  }]

  beforeEach(() => {
    wrapper = shallow(<CardContainer data={data} selectedCards={selected} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

