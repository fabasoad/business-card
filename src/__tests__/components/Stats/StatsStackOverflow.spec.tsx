import '@testing-library/jest-dom'
import * as React from 'react'
import StatsStackOverflow from '../../../components/Stats/StatsStackOverflow'
import { render } from '@testing-library/react'
import { testStatsStackOverflow } from './TestUtils'

test('should render StatsStackOverflow correctly', () => {
  const { container } = render(<StatsStackOverflow />)
  testStatsStackOverflow(container.querySelector('div.stats-item'))
})
