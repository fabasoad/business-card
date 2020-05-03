/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import LoadingSpinner from '../../components/LoadingSpinner'

test('should render LoadingSpinner correctly', () => {
  const wrapper = shallow(<LoadingSpinner />)
  expect(wrapper).toMatchSnapshot()
})
