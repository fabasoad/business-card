/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import LanguageTextItem from '../../../components/Languages/LanguageTextItem'

test('should render LanguageTextItem successfully', () => {
  const wrapper: ShallowWrapper = shallow(<LanguageTextItem
    code="test-code"
    text="test-text"
  />)
  expect(wrapper).toMatchSnapshot()
})