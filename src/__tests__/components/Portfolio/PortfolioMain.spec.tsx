import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import PortfolioMain from '../../../components/Portfolio/PortfolioMain'
import { testPortfolioMain } from './TestUtils'

test('should render PortfolioMain correctly', () => {
  const { container } = render(<PortfolioMain />)
  testPortfolioMain(container.querySelector('div#portfolio'))
})
