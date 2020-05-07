/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobTitle from '../../../components/Experience/JobTitle'

test('should render JobTitle correctly', () => {
  const wrapper = shallow(<JobTitle company="test-company" title="test-title" />)
  expect(wrapper).toMatchSnapshot()
})
