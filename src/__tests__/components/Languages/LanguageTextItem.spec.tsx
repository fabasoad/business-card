/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import LanguageTextItem from '../../../components/Languages/LanguageTextItem'

test('should render LanguageTextItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(<LanguageTextItem
    code="gb"
    text="test-text"
  />)
  expect(wrapper).toMatchSnapshot()
})
