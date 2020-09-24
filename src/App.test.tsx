import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'

let wrapper: ShallowWrapper;

describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders', () => {
    expect(wrapper).not.toBeNull()
  })
})