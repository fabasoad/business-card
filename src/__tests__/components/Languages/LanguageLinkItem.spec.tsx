/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import LanguageLinkItem from '../../../components/Languages/LanguageLinkItem'

test('should render LanguageLinkItem successfully', () => {
  const wrapper: ShallowWrapper = shallow(<LanguageLinkItem
    code="test-code"
    text="test-text"
    url="test-url"
  />)
  expect(wrapper).toMatchSnapshot()
})