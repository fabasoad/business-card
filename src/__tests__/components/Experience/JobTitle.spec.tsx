/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobTitle from '../../../components/Experience/JobTitle'

test('should render JobTitle correctly', () => {
  const wrapper = shallow(
    <JobTitle
      logo="test-logo"
      company="test-company"
      title="test-title"
      location="test-location"
    />
  )
  expect(wrapper).toMatchSnapshot()
})
