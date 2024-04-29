import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import LoadingSpinner from '../../components/LoadingSpinner'

test('should render LoadingSpinner correctly', () => {
  const { container } = render(<LoadingSpinner />)
  const div = container.querySelector('div.loader')
  expect(div).not.toBeNull()
  const divSpinner = div.querySelector('div.lds-spinner')
  expect(divSpinner).not.toBeNull()
  const divElements = divSpinner.querySelectorAll('div')
  expect(divElements).toHaveLength(12)
  for (const divElement of divElements) {
    expect(divElement).toBeEmptyDOMElement()
  }
})
