import React from 'react'
import Input from './Input'
import {shallow} from 'enzyme'

import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  

})