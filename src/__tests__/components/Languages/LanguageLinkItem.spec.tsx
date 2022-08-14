/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import LanguageLinkItem from '../../../components/Languages/LanguageLinkItem'

test('should render LanguageLinkItem correctly', () => {
  const { container } = render(<LanguageLinkItem
    code="gb"
    text="test-text"
    url="test-url"
  />)
  expect(container.firstChild).toMatchSnapshot()
})
