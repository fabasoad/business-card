/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import LanguageItem from '../../../components/Languages/LanguageItem'

test('should render LanguageItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(
    <LanguageItem code="gb">test-content</LanguageItem>
  )
  expect(wrapper).toMatchSnapshot()
})
