/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import PortfolioItem from '../../../components/Portfolio/PortfolioItem'

test('should render PortfolioItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(<PortfolioItem
    img="test-img"
    name="test-name"
    subtitle="test-subtitle"
    title="test-title"
    url="test-url"
  />)
  expect(wrapper).toMatchSnapshot()
})
