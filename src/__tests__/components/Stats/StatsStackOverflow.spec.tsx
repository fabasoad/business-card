import '@testing-library/jest-dom'
import * as React from 'react'
import StatsStackOverflow from '../../../components/Stats/StatsStackOverflow'
import { render } from '@testing-library/react'
import StatsMainContext, {
  defaultStatsDefaultProps,
  StatsDefaultProps
} from '../../../contexts/StatsMainContext'
import { testStatsStackOverflow } from './TestUtils'
import { randomNumber } from '../../TestUtils'

test('should render StatsStackOverflow correctly', () => {
  const expectedReputation: number = randomNumber(1, 100)
  const stats: StatsDefaultProps = defaultStatsDefaultProps
  stats.stackOverflow.reputation = expectedReputation
  const { container } = render(
    <StatsMainContext.Provider value={stats}>
      <StatsStackOverflow />
    </StatsMainContext.Provider>
  )
  testStatsStackOverflow(
    container.querySelector('div.stats-item'),
    expectedReputation
  )
})
