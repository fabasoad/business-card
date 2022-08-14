/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobPeriod from '../../../components/Experience/JobPeriod'

test('should render JobPeriod correctly', () => {
  const wrapper = shallow(<JobPeriod
    fromMonth={1}
    fromYear={2019}
    toMonth={4}
    toYear={2020}
  />)
  expect(wrapper).toMatchSnapshot()
})
