import '@testing-library/jest-dom'
import * as React from 'react'
import StatsSuperUser from '../../../components/Stats/StatsSuperUser'
import { render } from '@testing-library/react'
import StatsMainContext, {
  defaultStatsDefaultProps,
  StatsDefaultProps
} from '../../../contexts/StatsMainContext'
import { testStatsSuperUser } from './TestUtils'
import {randomNumber} from "../../TestUtils";

test('should render StatsSuperUser correctly', () => {
  const expectedReputation: number = randomNumber(1, 100)
  const stats: StatsDefaultProps = defaultStatsDefaultProps
  stats.stackExchange.superUser.reputation = expectedReputation
  const { container } = render(
    <StatsMainContext.Provider value={stats}>
      <StatsSuperUser />
    </StatsMainContext.Provider>
  )
  testStatsSuperUser(
    container.querySelector('div.stats-item'),
    expectedReputation
  )
})
