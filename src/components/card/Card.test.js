import React from 'react'
import Card from './Card'
import {shallow} from 'enzyme'

import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Card', () => {
  let wrapper
  const data = {
    "Location": "Colorado",
    "TimeFrame": 2007,
    "DataFormat": "Percent",
    "Data": 0.39465
  }
  const key = 245245098

  beforeEach(() => {
    wrapper = shallow(<Card data={data} key={key} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})