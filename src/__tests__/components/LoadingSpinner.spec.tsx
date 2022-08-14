/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import LoadingSpinner from '../../components/LoadingSpinner'

test('should render LoadingSpinner correctly', () => {
  const { container } = render(<LoadingSpinner />)
  expect(container.firstChild).toMatchSnapshot()
})
