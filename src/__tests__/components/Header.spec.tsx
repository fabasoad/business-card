import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '../../components/Header'
import { testHeader } from './TestUtils'

test('should render Header correctly', () => {
  const { container } = render(<Header />)
  testHeader(container.querySelector('header#header'))
})
