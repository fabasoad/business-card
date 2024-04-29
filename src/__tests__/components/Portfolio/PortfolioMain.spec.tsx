import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import PortfolioMain from '../../../components/Portfolio/PortfolioMain'
import { testPortfolioMain } from './TestUtils'

test('should render PortfolioMain correctly', () => {
  const { container } = render(<PortfolioMain />)
  testPortfolioMain(container.querySelector('div#portfolio'))
})
