/* eslint-disable */
import React from 'react'
import Input from './Input'
import {shallow} from 'enzyme'

describe('Input', () => {
  let wrapper;
  const clearSelection = jest.fn()
  const handleSearch = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Input handleSearch={handleSearch} clearSelection={clearSelection}/>
    )
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default empty state.value', () => {
    const inst = wrapper.instance()

    expect(inst.state.value).toEqual('')
  })

  it('should update state on input field change', () => {
    const inst = wrapper.instance()
    expect(inst.state.value).toEqual('')
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: 'abc'}})

    expect(inst.state.value).toEqual('abc')
  })
})


