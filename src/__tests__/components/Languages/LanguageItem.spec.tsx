/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import LanguageItem from '../../../components/Languages/LanguageItem'

test('should render LanguageItem correctly', () => {
  const { container } = render(
    <LanguageItem code="gb">test-content</LanguageItem>
  )
  expect(container.firstChild).toMatchSnapshot()
})
