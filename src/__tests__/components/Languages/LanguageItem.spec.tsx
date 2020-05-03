/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import LanguageItem from '../../../components/Languages/LanguageItem'

test('should render LanguageItem successfully', () => {
  const wrapper: ShallowWrapper = shallow(
    <LanguageItem code="test-code">test-content</LanguageItem>
  )
  expect(wrapper).toMatchSnapshot()
})