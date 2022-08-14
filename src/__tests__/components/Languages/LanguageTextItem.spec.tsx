/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import LanguageTextItem from '../../../components/Languages/LanguageTextItem'

test('should render LanguageTextItem correctly', () => {
  const { container } = render(<LanguageTextItem
    code="gb"
    text="test-text"
  />)
  expect(container.firstChild).toMatchSnapshot()
})
