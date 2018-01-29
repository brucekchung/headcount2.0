/* eslint-disable */
import React from 'react'
import Card from './Card'
import {shallow} from 'enzyme'

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
    wrapper = shallow(
      <Card data={data} key={key} className='card' location='denver'/>
    )
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})