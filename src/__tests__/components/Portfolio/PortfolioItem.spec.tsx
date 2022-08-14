/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import PortfolioItem from '../../../components/Portfolio/PortfolioItem'

test('should render PortfolioItem correctly', () => {
  const { container } = render(<PortfolioItem
    img="test-img"
    name="test-name"
    subtitle="test-subtitle"
    title="test-title"
    url="test-url"
  />)
  expect(container.firstChild).toMatchSnapshot()
})
