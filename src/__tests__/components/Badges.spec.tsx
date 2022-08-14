/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import Badges from '../../components/Badges'

test('should render Badges correctly', () => {
  const { container } = render(<Badges/>)
  expect(container.firstChild).toMatchSnapshot()
})
