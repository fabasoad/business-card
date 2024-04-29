import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'
import StatsStackOverflow from '../../../components/Stats/StatsStackOverflow'
import { testStatsStackOverflow } from './TestUtils'

test('should render StatsStackOverflow correctly', () => {
  const { container } = render(<StatsStackOverflow autoload={false} />)
  testStatsStackOverflow(container.querySelector('div.stats-item'))
})
