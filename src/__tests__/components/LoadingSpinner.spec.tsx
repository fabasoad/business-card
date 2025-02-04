import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import LoadingSpinner from '../../components/LoadingSpinner'

test('should render LoadingSpinner correctly', () => {
  const { container } = render(<LoadingSpinner />)
  const div = container.querySelector('div.loader')
  expect(div).toBeInTheDocument()
  const divSpinner = div.querySelector('div.lds-spinner')
  expect(divSpinner).toBeInTheDocument()
  const divElements = divSpinner.querySelectorAll('div')
  expect(divElements).toHaveLength(12)
  for (const divElement of divElements) {
    expect(divElement).toBeEmptyDOMElement()
  }
})
